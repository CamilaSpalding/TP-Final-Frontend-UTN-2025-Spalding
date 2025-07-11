/* import imagen from  */

// Este archivo solo contiene los datos de los contactos, simula ser un servidor.

const mook_data = {
    constacts: [
        {
            id: 1,
            name: 'cami',
            last_time_connected: '13:00',
            profile_pic: '../assets/images/imagen.jpg',
            last_message: {
                id: 1,
                text:  'hola Francesco',
                status: 'recibido' // true | false        
            },
            unread_messages: 0,
            messages: [
                {
                    id: 1,
                    sender: 'a',
                    sent_time: '00:01',
                    text: 'hola 1',
                    status: 'recibido' // true | false
                },
                {
                    id: 2,
                    sender: 'b',
                    sent_time: '00:02',
                    text: 'hola 2',
                    status: 'recibido' // true | false
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
                status: 'recibido' // true | false         
            },
            unread_messages: 2,
            messages: [
                {
                    id: 1,
                    sender: 'a',
                    sent_time: '00:01',
                    text: 'mi rubia',
                    status: 'recibido' // true | false
                },
                {
                    id: 2,
                    sender: 'b',
                    sent_time: '00:02',
                    text: 'cucaracha de dos patas',
                    status: 'recibido' // true | false
                },
            ]
        },
    ]
}

export default mook_data