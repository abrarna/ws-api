const UserItem = ({ user }) => {
  const { name, userName, email, address, phone, website, company } = user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;
  const { catchPhrase, bs } = company;
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            FullName : {name}" "{userName}
          </h5>
          <p className="card-text">email : {email}</p>
          <p className="card-text">
            Adrees : {street} " "{suite} " " {city} " "{zipcode} GEO:{lat} " "
            {lng}
          </p>

          <p className="card-text">{phone}</p>
          <p className="card-text">{website}</p>
          <p className="card-text">
            company : {company.name} {catchPhrase} {bs}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
