const ourTeam = () => {
  return (
    <main className="our-team">
      <section className="team-hero">
        <h1>Meet our Board</h1>
        <p>Our team makes everything possible!</p>
      </section>

      <section className="team-members">
        {/* board cards */}
        <div className="team-card">
          <div className="image-placeholder"></div>
          <h2>Name</h2>
          <p>position</p>
        </div>

        <div className="team-card">
          <div className="image-placeholder"></div>
          <h2>Name</h2>
          <p>position</p>
        </div>
      </section>
    </main>
  );
};

export default ourTeam;
