import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', 
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input1: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  //pagina de registro
  containerRegistro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: "15%",
  },

  titleRegistro: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: "5%",
  },

  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    color: '#000',
  },
  buttonRegistro: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonTextRegistro: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImageRegistro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },

  //iconos


  passwordContainer: {
    flexDirection: 'row',   
    alignItems: 'center',   
    borderColor: '#aaa',

  },

  IconoPosision: {
    position: 'absolute',
    right: 10,             
    justifyContent: 'center',
    color: '#000',
    bottom: 0.1

    // marginBottom:20       
  },

  modalContainer: {

    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20, 


  },

  modalContent: {
    width: '90%', // Más ancho para ocupar mayor espacio en la pantalla
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20, // Bordes más redondeados para una apariencia moderna
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // S
  },
  modalTitle: {
    fontSize: 22, // Tamaño de fuente más grande para resaltar el título
    fontWeight: 'bold',
    color: '#159FAD', // Color principal de la aplicación
    marginBottom: 20,
    textAlign: 'center', 
  },
  headerTable: {
    flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20, // Espacio más grande entre los elementos
  paddingVertical: 10,
  borderBottomWidth: 2,
  borderColor: '#159FAD',
  paddingRight:20,
  left:20,
  },

  
  headerTableText: {
    fontSize: 16,
    fontWeight: '600',
  },

  textHeaderInf: {
    fontSize: 18, // Tamaño de fuente más grande
    fontWeight: '600',
    color: '#333', // Color de texto oscuro para mejor legibilidad
  },

  cellContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cellText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cellLabel: {
    fontSize: 12,
    color: '#888',
  },

totalText: {
  fontSize: 20, // Tamaño de fuente más grande para el total
  fontWeight: 'bold',
  color: '#159FAD', // Color principal para el total
  marginTop: 20,
  textAlign: 'center', // Centrar el texto del total
},
modalCloseText: {
  fontSize: 18, // Tamaño de fuente más grande para el texto de cierre
  color: '#ff4444', // Rojo vibrante para resaltar el cierre
  marginTop: 20,
  textAlign: 'center',
},
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },


  // modal de productos a seleccionar
  contentModal: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#159FAD', 
    paddingBottom: 10,
  },


  contentPrincipal: {
    backgroundColor: '#FB6F0F',
    borderRadius: 10,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '82%',
    height:"51%",
    alignSelf:"center",
    marginTop:"25%",
  },


  closeIcon: {
    padding: 5,
  },
  modalBody: {
    alignItems: 'center',
  },
  imagenCard: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  quantityButton: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  buyButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },



  textContainer: {
    flex: 1,
  },


  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width:"90%",
    height:"10%",
    padding:"2%",
  },
  titleModal: {
    fontSize: 20,
    fontWeight: 'bold',
  },




  textTotalPay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },


buttonAddCard: {
  backgroundColor: '#159FAD', // Color principal para el botón
  paddingVertical: 12,
  paddingHorizontal: 30, // Más ancho para un botón más prominente
  borderRadius: 25, // Bordes más redondeados para un aspecto moderno
  alignItems: 'center',
  marginTop: 20, // Margen superior para separar el botón del contenido anterior
},


  textButtonAddCard: {
    color: 'white',
    fontSize: 18, // Tamaño de fuente más grande para el texto del botón
    fontWeight: 'bold',
    textAlign: 'center',
  },



  imageModal: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  messageStock: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  contentQuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonQuantity: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textButtonQuantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  textQuantity: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },


  contentHeaderHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },

  textIconCar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
    marginRight: 8,
  },

  //body

  contentBody: {
    flex: 1,
    paddingHorizontal: 20,
    // Espacio interno para el cuerpo
  }, 
});

export default styles;
