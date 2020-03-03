import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import {firebaseApp}  from "./utils/FireBase";
import Categorias from './screens/pedidos/categorias'

export default function App () {
 return (
   <Categorias/>
 );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
