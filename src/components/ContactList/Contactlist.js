import "./contactList.css";
import userImage from "../../assets/images/user.png";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className="item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={userImage} alt="user" />
              <div>
                <p>name:{name}</p>
                <p>email:{email}</p>
              </div>
            </div>

            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
