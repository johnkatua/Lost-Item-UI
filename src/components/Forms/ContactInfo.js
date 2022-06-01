import React from 'react'

const ContactInfo = ({ data }) => {
  return (
    <div>
      <p>
        You can phone this person using the following number: 
        {" "}
        <span style={{fontWeight: "bold"}}>
          {data.userPhone}
        </span>
      </p>
      <p>
        You can also email this person using the following email: 
        {" "}
        <span style={{fontWeight: "bold"}}>
          {data.userEmail}
        </span>
      </p>
    </div>
  )
}

export default ContactInfo;