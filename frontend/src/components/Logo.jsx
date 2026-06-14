const Logo = (props) => {
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  return (
    <h2 className="content__logo">
      {currentPage === "formpage" ? (
        <button
          className="app__home"
          type="button"
          onClick={() => setCurrentPage("homepage")}
        >
          Home
        </button>
      ) : (
        ""
      )}
      PaySheet
    </h2>
  );
};

export default Logo;
