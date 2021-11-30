const InitialLogo = (userObj) => {
  return (
    <div>
      {userObj.userObj.map((userData, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
              display: "flex",
              marginTop: "50px",
              marginBottom: "50px",
              borderRadius: "100px",
              backgroundColor: "gray",
            }}
          >
            <p
              style={{
                margin: "auto",
                fontSize: "48px",
                color: "white",
                height: "93px",
                width: "93px",
                backgroundColor: userData.color,
                borderRadius: "100px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {userData.name.charAt(0)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InitialLogo;
