import React from 'react'
import MainLayout from '../../../components/layout/MainLayout';
import {Button, Form} from "react-bootstrap";

export default function EditAudio() {
  return (
      <MainLayout>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Audio Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title"/>
            <Form.Text className="text-muted">
              What's the name of your latest piece?
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Audio description"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Use Commercial License"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Mint Your Piece
          </Button>
        </Form>
        );
      </MainLayout>
  )
}
