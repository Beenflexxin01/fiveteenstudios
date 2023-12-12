import f8 from "../../Images/f52.jpeg";
// import f8 from "../../Images/f43.jpeg";
function JournalContent() {
  return (
    <>
      <div className="journal">
        <img src={f8} alt="" className="journal-img" />
        <div className="journals">
          <h2 className="secondary-header">Every Line Matters.</h2>
          <p className="text-description">
            Read about the inspiration behind each of our related designs
          </p>
        </div>
      </div>
    </>
  );
}

export default JournalContent;
