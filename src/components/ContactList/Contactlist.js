const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id}>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
