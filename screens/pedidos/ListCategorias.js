import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import {Image} from "react-native-elements";
import * as firebase from 'firebase';

export default function ListCategorias(props){
   const {categorias, isLoading}=props;
    return(
    <View>
        {categorias ? (
            <FlatList
            data={categorias}
            renderItem={categoria => <Categoria categoria={categoria}/>}
            keyExtractor={(item, index) => index.toString()}
            //onEndReached={}
            onEndReachedThreshold={0}
            //ListFooterComponent={}
            />
        ) : (
            <View style={styles.loadingCategorias}>
                <ActivityIndicator size="large" />
                <Text> Cargando categorias</Text>
            </View>

        )}
    </View>
    );
}

function Categoria(props){
    const {categoria}=props;
    const {DNI,Nombre, Imagen}= categoria.item.categoria;
    const [imageCategoria, setImagenCategoria]= useState(null);
    useEffect(() => {
        setImagenCategoria(Imagen);
    })
    return(
        <TouchableOpacity onPress={() => console.log('Ir a categoria')}>
        <View styles={styles.viewCategorias}>
        <View style={styles.viewCategoriasImagen}>
        <Image
        resizeMode="cover"
        source={uri: imageCategoria}
        styles={styles.imagenCategoria}
        PlaceholderContent={<ActivityIndicator color="fff"/>}
        />
        </View>
        <View>
        <Text style={styles.categoriaNombre}>{Nombre}</Text>
        <Text style={styles.categoriaNombre}>{imageCategoria}</Text>   
        </View>
        </View>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    loadingCategorias: {
        marginTop: 20,
        alignItems: 'center',
    }, 
    viewCategorias: {
        flexDirection: 'row',
        margin: 10
    },
    categoriaNombre: {
        fontWeight: "bold"
    },
    viewCategoriasImagen:{
        marginRight: 15
    },
    imagenCategoria: {
        width:80,
        height: 80
    }
})