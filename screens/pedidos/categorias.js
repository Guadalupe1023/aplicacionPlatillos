import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";
import ListCategorias from "../../screens/pedidos/ListCategorias";

import {firebaseApp} from '../../utils/FireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebase.firestore(firebaseApp);

export default function categorias(props){
    const [categorias, setCategorias]= useState([]);
    const [startCategorias, setStartCategorias]= useState(null);
    const [isLoading, setIsLoading]= useState(false);
    const [totalCategorias, setTotalCategorias]= useState(0);
    const limitCategorias=3;


    useEffect(() => {
    db.collection("categorias")
    .get()
    .then(snap =>{
        setTotalCategorias(snap.size); 
    });

    (async () => {
        const resultCategorias=[];
        const categorias= db
        .collection('categorias')
        .limit(limitCategorias);

        await categorias.get().then(response => {
            setStartCategorias(response.docs[response.docs.length-1]);
            
            response.forEach(doc => {
                let categoria=doc.data();
                categoria.id=doc.id;
                resultCategorias.push({categoria});
            });
            setCategorias(resultCategorias);
        });
    })();
    }, []); 
    

    return (
        <View style={styles.viewBody}>
            <ListCategorias categorias={categorias} isLoading={isLoading}/>
        </View>

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