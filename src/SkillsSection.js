import React from "react"; 

class SkillsSection extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        
        { name: 'React', value: '75%' },
        { name: 'Bootstrap', value: '75%' },
        { name: 'JavaScript', value: '85%' },
        { name: 'jQuery', value: '70%' }
      ]
    };
  }

  render() {
    const { skills } = this.state;
    const progressBarHeight = '50px'; 

    // Styles for the section
    const sectionStyle = {
      backgroundColor: '#466f7d', // Background color
      color: 'dark', // Font color
      TextAlign: 'center',
      TextDecoder: 'utf8',
    };

    return (
      <section id="skills" className="py-5" style={sectionStyle}>
        <div className="container">
          <h2 className="display-4 text-center">Skills</h2>
          <p className="text-center">
          s a Full Stack Engineer, I have a solid foundation in front-end technologies such as HTML, CSS, and JavaScript. I am proficient in modern JavaScript frameworks like React and Angular, and I have experience in building responsive and user-friendly interfaces. On the server-side, I am skilled in languages like Node.js and Python, and have hands-on experience with frameworks like Express and Django.

I have a deep understanding of databases and have worked extensively with SQL and NoSQL databases like MySQL and MongoDB. I am also familiar with cloud platforms such as AWS and have deployed applications using services like EC2, S3, and Lambda.

Throughout my career, I have successfully delivered end-to-end solutions, from conceptualization to deployment. I am comfortable working in an Agile environment and have experience collaborating with cross-functional teams, including designers, product managers, and QA engineers.

I am continuously learning and staying up-to-date with the latest industry trends and technologies. I am passionate about writing clean and maintainable code, following best practices, and implementing industry-standard security practices.

In addition to my technical skills, I possess excellent problem-solving abilities and attention to detail. I am a proactive communicator and enjoy working closely with stakeholders to understand their requirements and deliver solutions that exceed expectations.
</p>
          <div className="text-center"> {/* Adjusted to center the skills */}
            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <h3>{skill.name}</h3>
                <div className="progress" style={{ height: progressBarHeight }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.value }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
