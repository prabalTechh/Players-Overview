import BasketballPlayerCard from "./components/BasketballPlayerCard";
const App = () => {
  return (
    <main className="h-full w-full">
      <div className="w-full py-2 px-4 bg-blue-200">
        <h2>Player Overview</h2>
      </div>

      <div className="h-full w-full p-4 flex flex-col sm:flex-row items-center lg:justify-center flex-wrap gap-2 ">
        {" "}
        <BasketballPlayerCard
          name="LeBron james"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          position="fO"
          stat1="25.7"
          stat2="7.3"
          stat3="16.9"
        />
        <BasketballPlayerCard
          name="PRECIOUS ACHIUWA"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1630173.png"
          position="f"
          stat1="7.6"
          stat2="6.6"
          stat3="9.5"
        />
         <BasketballPlayerCard
          name="STEVEN ADAMS"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/203500.png"
          position="C"
          stat1="8.6"
          stat2="11.5"
          stat3="11.2"
        />
        <BasketballPlayerCard
          name="BAM ADEBAYO"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png"
          position="CF"
          stat1="19.6"
          stat2="10.4"
          stat3="15.2"
        />
        <BasketballPlayerCard
          name="OCHAI AGBAJI"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1630534.png"
          position="G"
          stat1="5.8"
          stat2="2.8"
          stat3="4.6"
        />
        <BasketballPlayerCard
          name="SANTI ALDAMA"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1630583.png"
          position="FC"
          stat1="10.7"
          stat2="5.8"
          stat3="10"
        />
        <BasketballPlayerCard
          name="NICKEIL ALEXANDER-WALKER"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1629638.png"
          position="G"
          stat1="8.6"
          stat2="2.5"
          stat3="7.2"
        />
        <BasketballPlayerCard
          name="COLE ANTHONY"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1630175.png"
          position="G"
          stat1="11.6"
          stat2="3.9"
          stat3="10.9"
        />
        <BasketballPlayerCard
          name="SADDIQ BEY"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1630180.png"
          position="C"
          stat1="13.6"
          stat2="6.5"
          stat3="7.9"
        />
        <BasketballPlayerCard
          name="ANTHONY BLACK"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1641710.png"
          position="G"
          stat1="4.6"
          stat2="2.5"
          stat3="5.4"
        />
        <BasketballPlayerCard
          name="MARJON BEAUCHAMP"
          imageUrl="https://cdn.nba.com/headshots/nba/latest/1040x760/1630699.png"
          position="F"
          stat1="4.4"
          stat2="2.1"
          stat3="6.4"
        />
      </div>
    </main>
  );
};

export default App;
