import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`flex items-center flex-row justify-center flex-wrap sm:mb-20 mb-3`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`ml-10 mr-10 flex flex-column justify-center items-center`} >
      <img src={stat.icon} alt="star" className="w-[100px] h-[100px] object-contain " />
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;