import React, { Component } from "react";
import "./Dashboard.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-box">
            <h3>Añadir</h3>
            <Form>
              <Form.Label>Fecha del registro (AAAA-MM-DD)</Form.Label>
              <Form.Control type="text" placeholder="2021-11-31" />
              <Form.Label>Origen</Form.Label>
              <Form.Select aria-label="origen">
                <option>Seleccione un origen</option>
                <option value="1"> USMER </option>
                <option value="2"> FUERA DE USMER </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Entidad de Unidad Medica</Form.Label>
              <Form.Select aria-label="entidad-um">
                <option>Seleccione un estado</option>
                <option value="1"> AGUASCALIENTES </option>
                <option value="2"> BAJA CALIFORNIA </option>
                <option value="3"> BAJA CALIFORNIA SUR </option>
                <option value="4"> CAMPECHE </option>
                <option value="5"> COAHUILA DE ZARAGOZA </option>
                <option value="6"> COLIMA </option>
                <option value="7"> CHIAPAS </option>
                <option value="8"> CHIHUAHUA </option>
                <option value="9"> CIUDAD DE MÉXICO </option>
                <option value="10"> DURANGO </option>
                <option value="11"> GUANAJUATO </option>
                <option value="12"> GUERRERO </option>
                <option value="13"> HIDALGO </option>
                <option value="14"> JALISCO </option>
                <option value="15"> MÉXICO </option>
                <option value="16"> MICHOACÁN DE OCAMPO </option>
                <option value="17"> MORELOS </option>
                <option value="18"> NAYARIT </option>
                <option value="19"> NUEVO LEÓN </option>
                <option value="20"> OAXACA </option>
                <option value="21"> PUEBLA </option>
                <option value="22"> QUERÉTARO </option>
                <option value="23"> QUINTANA ROO </option>
                <option value="24"> SAN LUIS POTOSÍ </option>
                <option value="25"> SINALOA </option>
                <option value="26"> SONORA </option>
                <option value="27"> TABASCO </option>
                <option value="28"> TAMAULIPAS </option>
                <option value="29"> TLAXCALA </option>
                <option value="30"> VERACRUZ DE IGNACIO DE LA LLAVE </option>
                <option value="31"> YUCATÁN </option>
                <option value="32"> ZACATECAS </option>
                <option value="36"> ESTADOS UNIDOS MEXICANOS </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Entidad de residencia</Form.Label>
              <Form.Select aria-label="entidad-res">
                <option>Seleccione un estado</option>
                <option value="1"> AGUASCALIENTES </option>
                <option value="2"> BAJA CALIFORNIA </option>
                <option value="3"> BAJA CALIFORNIA SUR </option>
                <option value="4"> CAMPECHE </option>
                <option value="5"> COAHUILA DE ZARAGOZA </option>
                <option value="6"> COLIMA </option>
                <option value="7"> CHIAPAS </option>
                <option value="8"> CHIHUAHUA </option>
                <option value="9"> CIUDAD DE MÉXICO </option>
                <option value="10"> DURANGO </option>
                <option value="11"> GUANAJUATO </option>
                <option value="12"> GUERRERO </option>
                <option value="13"> HIDALGO </option>
                <option value="14"> JALISCO </option>
                <option value="15"> MÉXICO </option>
                <option value="16"> MICHOACÁN DE OCAMPO </option>
                <option value="17"> MORELOS </option>
                <option value="18"> NAYARIT </option>
                <option value="19"> NUEVO LEÓN </option>
                <option value="20"> OAXACA </option>
                <option value="21"> PUEBLA </option>
                <option value="22"> QUERÉTARO </option>
                <option value="23"> QUINTANA ROO </option>
                <option value="24"> SAN LUIS POTOSÍ </option>
                <option value="25"> SINALOA </option>
                <option value="26"> SONORA </option>
                <option value="27"> TABASCO </option>
                <option value="28"> TAMAULIPAS </option>
                <option value="29"> TLAXCALA </option>
                <option value="30"> VERACRUZ DE IGNACIO DE LA LLAVE </option>
                <option value="31"> YUCATÁN </option>
                <option value="32"> ZACATECAS </option>
                <option value="36"> ESTADOS UNIDOS MEXICANOS </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Sexo</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione un sexo</option>
                <option value="1"> HOMBRE </option>
                <option value="2"> MUJER </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Tipo de paciente</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione un tipo de paciente</option>
                <option value="1"> AMBULATORIO </option>
                <option value="2"> HOSPITALIZADO </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Fecha de ingreso (AAAA-MM-DD)</Form.Label>
              <Form.Control type="text" placeholder="2021-11-31" />
              <Form.Label>Fecha de sintomas (AAAA-MM-DD)</Form.Label>
              <Form.Control type="text" placeholder="2021-11-31" />
              <Form.Check type="switch" id="custom-switch" label="Difunto" />
              <Form.Label>Fecha de defuncion (AAAA-MM-DD)</Form.Label>
              <Form.Control type="text" placeholder="2021-11-31" />
              <Form.Label>Intubado</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para intubado</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Neumonia</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para neumonia</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Edad</Form.Label>
              <Form.Control type="text" placeholder="75" />
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para sexo</option>
                <option value="1"> MEXICANA </option>
                <option value="2"> EXTRANJERA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Embarazo</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para embarazo</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Diabetes</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para diabetes</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Asma</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para asma</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Inmunosupresión</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para inmunosupresión</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Hipertension</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para hipertension</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Problemas cardiovasculares</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione una opción que identifique problemas
                  cardiovasculares
                </option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Obesidad</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción para obesidad</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Tabaquismo</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione una opción acerca del habito de tabaquismo
                </option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Tuvo contacto con otro caso de COVID...</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione una opción de contacto con casos SARS CoV-2
                </option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Se tomó una muestra de laboratorio</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione una opción sobre si se tomó una muestra de
                  laboratorio
                </option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Resultado de muestra laboratorio</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione un resultado de la muestra de laboratorio
                </option>
                <option value="1"> POSITIVO </option>
                <option value="2"> NEGATIVO </option>
                <option value="3"> RESULTADO PENDIENTE </option>
                <option value="4"> RESULTADO NO ADECUADO </option>
                <option value="99"> NO APLICA (CASO SIN MUESTRA) </option>
              </Form.Select>
              <Form.Label>Se tomó una muestra de antigeno</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione una opción sobre si se tomó una muestra de antígeno
                </option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>Resultado antigeno</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione un resultado de la muestra de antigeno
                </option>
                <option value="1"> POSITIVO A SARS-COV-2 </option>
                <option value="2"> NEGATIVO A SARS-COV-2 </option>
                <option value="97"> NO APLICA (CASO SIN MUESTRA) </option>
              </Form.Select>
              <Form.Label>Clasificación final</Form.Label>
              <Form.Select aria-label="clasificacion-final">
                <option>Seleccione una opción de clasificación final</option>
                <option value="1">
                  CASO DE COVID-19 CONFIRMADO POR ASOCIACIÓN CLÍNICA
                  EPIDEMIOLÓGICA
                </option>
                <option value="2">
                  CASO DE COVID-19 CONFIRMADO POR COMITÉ DE DICTAMINACIÓN
                </option>
                <option value="3"> CASO DE SARS-COV-2 CONFIRMADO </option>
                <option value="4"> INVÁLIDO POR LABORATORIO </option>
                <option value="5"> NO REALIZADO POR LABORATORIO </option>
                <option value="6"> CASO SOSPECHOSO </option>
                <option value="7"> NEGATIVO </option>
              </Form.Select>
              <Form.Label>Migrante</Form.Label>
              <Form.Select aria-label="sexo">
                <option>Seleccione una opción de migrante</option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Label>País nacionalidad (99, SE IGNORA)</Form.Label>
              <Form.Control type="text" />
              <Form.Label>
                País del que partió el paciente rumbo a México (97, NO APLICA)
              </Form.Label>
              <Form.Control type="text" />
              <Form.Label>Unidad de cuidados intensivos</Form.Label>
              <Form.Select aria-label="sexo">
                <option>
                  Seleccione una opción sobre si el paciente requirió ingresar a
                  una UCI
                </option>
                <option value="1"> SI </option>
                <option value="2"> NO </option>
                <option value="97"> NO APLICA </option>
                <option value="98"> SE IGNORA </option>
                <option value="99"> NO ESPECIFICADO </option>
              </Form.Select>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Confirmo que la información ingresada en este formulario es veridica"
                />
              </Form.Group>
              <Button variant="primary">Subir registro</Button>
            </Form>
          </div>
          <div>
            <div className="dashboard-box-v">
              <h3>Eliminar</h3>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="z12d63"
                />
                <label htmlFor="floatingInputCustom">Registro a eliminar</label>
              </Form.Floating>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Estoy seguro de que deseo eliminar el registro ingresado"
                />
              </Form.Group>
              <Button variant="danger">Eliminar</Button>
            </div>
            <div className="dashboard-box-v">
              <h3>Refrescar</h3>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Estoy seguro de que deseo actualizar la base de datos"
                />
              </Form.Group>
              <Button variant="warning">Actualizar</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
