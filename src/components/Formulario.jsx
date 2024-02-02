import React from "react";
import { Form, Button } from "react-bootstrap";
import ContenedorPeliculas from "./ContenedorPeliculas";
import { useState } from "react";

const Formulario = () => {
  class Pelicula {
    #titulo;
    #descripcion;
    #genero;

    constructor(titulo, descripcion, genero) {
      this.#titulo = titulo;
      this.#descripcion = descripcion;
      this.#genero = genero;
    }
    getTitulo() {
      return this.#titulo;
    }
    getDescripcion() {
      return this.#descripcion;
    }
    getGenero() {
      return this.#genero;
    }
  }

  const [arrayPelicula, setArrayPelicula] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const peli = new Pelicula(titulo, descripcion, genero);
    setArrayPelicula([...arrayPelicula, peli]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="contenidoFormulario">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de la Pelicula"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Género</Form.Label>
          <Form.Select
            onChange={(e) => setGenero(e.target.value)}
            value={genero}
          >
            <option>Comedia</option>
            <option>Infantil</option>
            <option>Drama</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="btnFormulario ms-auto">
          Cargar Película
        </Button>
      </Form>

      <ContenedorPeliculas arrayPelicula={arrayPelicula} />
    </>
  );
};

export default Formulario;
