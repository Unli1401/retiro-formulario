
import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';

import { db } from '../firebase.js'

import { toast } from 'react-toastify';

const FormularioRetiro = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    direccion: '',
    piso: '',
    area: '',
    oficina: '',
    departamento: '',
    contacto_nombre: '',
    contacto_email: '',
    contacto_telefono: '',
    contacto_backup_nombre: '',
    contacto_backup_email: '',
    contacto_backup_telefono: '',
    horario_retiro: '',
    tipo_retiro: 'maquina',
    cantidad: 1,
    modelos_series: '',
    tiene_accesorios: false,
    descripcion_accesorios: '',
    estado_productos: 'operativo',
    embalado: false,
    requiere_mantenimiento: false,
    requisitos_personal: '',
    epp_requeridos: '',
    requisitos_seguridad: '',
    estacionamiento: '',
    ascensor_montacarga: false,
    destino: 'scrap',
    otros_comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'retiros'), formData);
      toast.success('Solicitud de retiro enviada con éxito!');
      setShowSuccess(true);
    } catch (error) {
      toast.error('Error al enviar el formulario');
      console.error('Error adding document: ', error);
    }
  };

  if (showSuccess) {
    return (
      <Container className="mt-5">
        <Card>
          <Card.Body className="text-center">
            <Card.Title className="text-success">¡Solicitud enviada con éxito!</Card.Title>
            <Card.Text>
              Tu solicitud de retiro ha sido registrada. Nos pondremos en contacto contigo pronto.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h5" className="text-center bg-primary text-white">
          Formulario de Retiro de Equipos
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Card className="mb-4">
              <Card.Header as="h6">Información del Cliente</Card.Header>
              <Card.Body>
                <Form.Group controlId="direccion" className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="piso">
                      <Form.Label>Piso</Form.Label>
                      <Form.Control
                        type="text"
                        name="piso"
                        value={formData.piso}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="area">
                      <Form.Label>Área</Form.Label>
                      <Form.Control
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Más campos según tu checklist... */}
                {/* Sección de Contacto Principal */}
                <Card className="mb-3 mt-3">
                  <Card.Header as="h6">Contacto Principal</Card.Header>
                  <Card.Body>
                    <Row className="mb-3">
                      <Col md={4}>
                        <Form.Group controlId="contacto_nombre">
                          <Form.Label>Nombre y Apellido</Form.Label>
                          <Form.Control
                            type="text"
                            name="contacto_nombre"
                            value={formData.contacto_nombre}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="contacto_email">
                          <Form.Label>Correo</Form.Label>
                          <Form.Control
                            type="email"
                            name="contacto_email"
                            value={formData.contacto_email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="contacto_telefono">
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type="tel"
                            name="contacto_telefono"
                            value={formData.contacto_telefono}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* Sección de Detalles del Retiro */}
                <Card className="mb-3 mt-3">
                  <Card.Header as="h6">Detalles del Retiro</Card.Header>
                  <Card.Body>
                    <Row className="mb-3">
                      <Col md={4}>
                        <Form.Group controlId="tipo_retiro">
                          <Form.Label>Tipo de Retiro</Form.Label>
                          <Form.Select
                            name="tipo_retiro"
                            value={formData.tipo_retiro}
                            onChange={handleChange}
                            required
                          >
                            <option value="insumos">Insumos</option>
                            <option value="maquina">Máquina</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="cantidad">
                          <Form.Label>Cantidad a retirar</Form.Label>
                          <Form.Control
                            type="number"
                            name="cantidad"
                            min="1"
                            value={formData.cantidad}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="estado_productos">
                          <Form.Label>Estado de los Productos</Form.Label>
                          <Form.Select
                            name="estado_productos"
                            value={formData.estado_productos}
                            onChange={handleChange}
                            required
                          >
                            <option value="operativo">Operativo</option>
                            <option value="defectuoso">Defectuoso</option>
                            <option value="desconocido">Desconocido</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="modelos_series" className="mb-3">
                      <Form.Label>Modelos/Series</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="modelos_series"
                        value={formData.modelos_series}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="tiene_accesorios">
                          <Form.Check
                            type="switch"
                            id="tiene_accesorios"
                            label="¿Tienen accesorios?"
                            name="tiene_accesorios"
                            checked={formData.tiene_accesorios}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {formData.tiene_accesorios && (
                      <Form.Group controlId="descripcion_accesorios" className="mb-3">
                        <Form.Label>Descripción de accesorios</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="descripcion_accesorios"
                          value={formData.descripcion_accesorios}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    )}
                  </Card.Body>
                </Card>

                {/* Continuar con las demás secciones del formulario... */}
              </Card.Body>
            </Card>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Enviar Solicitud de Retiro
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FormularioRetiro;

