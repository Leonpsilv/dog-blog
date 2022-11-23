import "./css/UserStats.css";

import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraph = ({data}) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // if (data.length === 0) return;

    const graphData = data.map(item => {
        return {
            x: item.title,
            y: Number(item.acessos)
        }
    });
    
    setGraph(graphData);
    // setTotal(
    //     data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    // );
  }, [data]);

  return (
    <section className="user-graph anime-left">
      <div className="user-total graph-item">
        <p>Acessos: {total}</p>
      </div>
      <div className="graph-item">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
                fillOpacity: .9,
                stroke: '#fff',
                strokeWidth: 2
            },
            labels: {
                fontSize: 14,
                fill: '#333'
            }
          }}
        />
      </div>
      <div className="graph-item">
        <VictoryChart>
            <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraph;