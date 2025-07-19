/* import imagen from  */

// Este archivo solo contiene los datos de los contactos, simula ser un servidor.

const mook = {
    contacts: [
        {
            id: 1,
            name: 'cami',
            phone: '+54 9 11 6997-9020',
            info: 'Hakuna Matata',
            last_time_connected: '13:00',
            profile_pic: '../assets/images/imagen.jpg',
            last_message: {
                id: 1,
                text:  'hola Francesco',
                sent_time: '10:20',
                sent_date: '20/04/2025' 
                status: 'received'
            },
            unread_messages: 0,
            messages: [
                {
                    id: 1,
                    sender: 'a',
                    sent_time: '00:01',
                    sent_date: '01/07/2025',
                    text: 'hola 1',
                    status: 'seen' 
                },
                {
                    id: 2,
                    sender: 'b',
                    sent_time: '00:02',
                    sent_date: '01/07/2025',
                    text: 'hola 2',
                    status: 'received'
                },
            ],
            groups: [
                {
                    id: 1,
                    name: 'Grupo de diseño',
                    last_message: {
                        id: 1,
                        text: 'Nos vemos mañana'
                        sent_time: '10:20',
                        sent_date: '01/04/2025' 
                        status: 'received'
                    }
                },
                {
                    id: 2,
                    name: 'Us',
                    last_message: 'Parecemos los locos Adams...'
                },
            ]
        },
        {
            id: 2,
            name: 'fran',
            last_time_connected: '11:30',
            profile_pic: '../assets/images/imagen.jpg',
            last_message: {
                id: 2,
                text: 'cucaracha rubia',
                status: 'sent'     
            },
            unread_messages: 2,
            messages: [
                {
                    id: 1,
                    sender: 'a',
                    sent_time: '00:01',
                    sent_date: '01/07/2025',
                    text: 'mi rubia',
                    status: 'received'
                },
                {
                    id: 2,
                    sender: 'b',
                    sent_time: '00:02',
                    sent_date: '01/07/2025',
                    text: 'cucaracha de dos patas',
                    status: 'received'
                },
            ],
            groups: [
                {
                    id: 1,
                    name: 'Gym Bros',
                    last_message: 'Hoy entrenamos'
                },
                {
                    id: 2,
                    name: 'Compas Colegio',
                    last_message: 'Hacemos asado?'
                },
            ]
        },
    ]
}

export default mook_data