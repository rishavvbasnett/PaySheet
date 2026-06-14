const Footer = (props) => {
  const handleSave = props.handleSave;

  return (
    <div className="footer">
      <button
        className="footer__save"
        type="submit"
        onClick={(event) => handleSave(event)}
      >
        Save Week
      </button>
    </div>
  );
};

export default Footer;
