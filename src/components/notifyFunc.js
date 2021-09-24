export function Notify(setNotify, msg) {
  setNotify({
    msg,
    type: "success",
    isNotify: true,
  });
  setTimeout(() => {
    setNotify({
      msg: "",
      type: "",
      isNotify: false,
    });
  }, 2000);
}
