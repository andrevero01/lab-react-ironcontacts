import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const contactsList = contacts.slice(0, 5);

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "60px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
