import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.png";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div key={id} className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userImage} alt="user" />
        <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
          <div>
            <p>name:{name}</p>
            <p>email:{email}</p>
          </div>
        </Link>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
