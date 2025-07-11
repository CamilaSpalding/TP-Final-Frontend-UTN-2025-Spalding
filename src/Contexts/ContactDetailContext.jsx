import React, { createContext, useState } from 'react'
import { getContactById } from '../services/contactService'

export const ContactDetailContext = createContext(
    {
        contactDetail: {},
        loadContact: (contact_id) => {}
    }
)

const ContactDetailContextProvider = ({ children }) => {

    const [contactDetail, setContactDetail] = useState(null)
    const [isLoadingContactDetail, setIsLoadingContactDetail] = useState(true)

    const loadContact = (contact_id) => {
        setIsLoadingContactDetail(true)
        setTimeout(
            () => {
                const contactSelected = getContactById(contact_id)
                setContactDetail(contactSelected)
                setIsLoadingContactDetail(false)
            },
            1000
        )
    }

    return (
        <ContactDetailContext.Provider
            value={
                {
                    contactDetail: contactDetail,
                    isLoadingContactDetail: isLoadingContactDetail,
                    loadContact: loadContact
                }
            }
        >
            {children}
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContext