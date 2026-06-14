const Footer = (props) => {
  const handleSave = props.handleSave;
  const handleBack = props.handleBack;

  return (
    <div className="footer">
      <button className="footer__save" onSubmit={(event) => handleSave(event)}>
        Save
      </button>
      <button className="footer__back" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Footer;
