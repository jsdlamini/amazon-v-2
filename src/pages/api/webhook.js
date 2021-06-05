import { buffer } from 'micro'
import * as admin from 'firebase-admin'

//Secure a connection to Firebase from the backend
var serviceAccount = require("../../../permissions.json");

const app = !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
    : admin.app()

// Connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fullFillOrder = async (session) => {
    console.log('Fill-filling order....', session)
    return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id)
        .set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            // title: JSON.parse(session.metadata.titles),
            timestamp: admin.firestore.FieldValue.serverTimestamp()

        }).then(() => {
            console.log(`SUCCESS: Order ${session.id} had been added to the database`)
        }).catch(console.log('Failed', session))

}


export default async (req, res) => {
    if (req.method === 'POST') {
        const requstBuffer = await buffer(req)
        const payload = requstBuffer.toString()
        const sig = req.headers['stripe-signature']

        let event;

        // Verify that the event posted is indeed from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            return res.status(400).send(`Webhook error : ${err.message} `)
        }

        // Handle checkout.session.completed event

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            console.log('Session completed....')


            // Fulfill the order
            return fullFillOrder(session).then(() => res.status(200)).catch((err) => res.status(400).send(`Webhook Error ${err.message}`))
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}