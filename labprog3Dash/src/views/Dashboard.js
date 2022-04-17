import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const center = [-22.954791193251708, -43.16682012513933];

function Dashboard() {
  return (
    <>
      <div className="content">
      <Row>
          <Col>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col >
                    <div className="numbers">
                      <p className="card-category">Total de Doenças Mapeadas</p>
                      <CardTitle tag="h7">8</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Atualizar
                </div>
              </CardFooter>
            </Card>
          </Col>  
        </Row>
        <Row>
          <Col>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col >
                    <div className="numbers">
                      <p className="card-category">Doenças Escolhidas</p>
                      <CardTitle tag="h7">Dengue</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Escolher
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col >
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col>
                    <div className="numbers">
                      <p className="card-category">Número de Casos Totais</p>
                      <CardTitle tag="p">100.000</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Data
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col >
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col >
                    <div className="numbers">
                      <p className="card-category">Estado com mais ocorrências</p>
                      <CardTitle tag="h10">Amazonas</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <i className="fas fa-sync-alt" /> Atualizar
                </div>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Mapemento das Doenças</CardTitle>
                {/* <p className="card-category">Mapa de Calor</p> */}
              </CardHeader>
              <CardBody>
                {/* <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                /> */}
                <MapContainer 
                center={center} 
               zoom={5}
                style = {{widht:'100vw', height:'100vh'}}
              >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=MXOzeGhwZ8mscs81Wjmt"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              >
              </TileLayer>
              </MapContainer>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Dashboard;
