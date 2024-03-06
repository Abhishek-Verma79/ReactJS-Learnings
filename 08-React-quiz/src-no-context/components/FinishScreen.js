function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const precentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (precentage === 100) emoji = "🎖️";
  if (precentage >= 80 && precentage < 100) emoji = "🎉";
  if (precentage >= 50 && precentage < 80) emoji = "🙃";
  if (precentage >= 0 && precentage < 50) emoji = "🤔";
  if (precentage === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(precentage)})%;
      </p>
          <p className="highscore">(Highscore: {highScore} points)</p>
          <button className="btn btn-ui" onClick={() => dispatch({type: "restartQuiz"})}>Restart quiz</button>
    </>
  );
}

export default FinishScreen;
