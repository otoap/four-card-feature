import "./MainComp.css";

export default function Main() {
    return <main>
        <section>
            <div className="supervisor box">
                <div className="texts">
                    <h2>Supervisor</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                </div>
                <img src="./images/icon-supervisor.svg" alt="supervisor svg" />
            </div>
            <div className="centralDiv">
                <div className="team box">
                    <div className="texts">
                        <h2>Team Builder</h2>
                        <p>Scans our talent network to create the optimal team for your project</p>
                    </div>
                    <img src="./images/icon-team-builder.svg" alt="team builder svg" />
                </div>
                <div className="karma box">
                    <div className="texts">
                        <h2>Karma</h2>
                        <p>Regularly evaluates our talent to ensure quality</p>
                    </div>
                    <img src="./images/icon-karma.svg" alt="karma svg" />
                </div>
            </div>
            <div className="calculator box">
                    <div className="texts">
                        <h2>Calculator</h2>
                        <p>Uses data from past projects to provide better delivery estimates</p>
                    </div>
                    <img src="./images/icon-calculator.svg" alt="calculator svg" />
                </div>
        </section>
    </main>
}
