import "./notification.css";
const Notification = ({ msg, type, setNotify }) => {
  const removeNotifications = () => {
    setNotify({
      msg: "",
      type: "",
      isNotify: false,
    });
  };
  return (
    <div
      className={`notification active ${
        type === "success" ? "success" : "warning"
      }`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>{msg}</p>
        <div
          onClick={removeNotifications}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          <i size="16px" className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Notification;
