import React from 'react'
import { StyleSheet, Text, View,ImageBackground  } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const CarouselImg = () => {
    const arrayCities = [
          {
            id: 1,
            name: "Mexico City",
            url:
              "https://th.bing.com/th/id/R.f124a63611bfdcec864d7a22cfe0d2b7?rik=3EK6hlHoJWa%2baQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-0q9rkfRVfPU%2fUxW9bpbouJI%2fAAAAAAAAd3Y%2ffh5Eb9jsn9w%2fs1600%2fMexico-City-Mexico.jpg&ehk=8hLyAwb74rVYzHHpsJpdPGMRXSdBg5x472ixn%2bo9DHc%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            id: 2,
            name: "Iquitos",
            url:
              "https://www.miviaje.info/wp-content/uploads/2019/03/amazonas-peruano-belleza-sin-fin.jpg",
          },
          {
            id: 3,
            name: "Fanjingshan",
            url:
              "https://www.travelbook.de/data/uploads/2021/01/219733358_1610121494.jpg",
          },
          {
            id: 4,
            name: "Dakar",
            url:
              "https://images.lonelyplanetitalia.it/static/places/dakar-4469.jpg?q=80&p=slider&s=b8c2fcfabffe1f1fdf2bb826714a2996",
          },
          {
            id: 5,
            name: " Dordogne",
            url:
              "https://th.bing.com/th/id/OIP.v7tlUBpGZgvwgflPoWb3dQHaFR?pid=ImgDet&rs=1",
          },
          {
            id: 6,
            name: "Greenland",
            url:
              "https://th.bing.com/th/id/OIP.9WilmeY7H723cjs4V-GV3wHaE8?pid=ImgDet&rs=1",
          },
          {
            id: 7,
            name: "Papete",
            url:
              "https://th.bing.com/th/id/OIP.uAte1uOToJFkVfMOWFiSiAHaE8?pid=ImgDet&rs=1",
          },
          {
            id: 8,
            name: "Vevey",
            url:
              "https://viajes.nationalgeographic.com.es/medio/2018/12/28/vevey-suiza_27e0b3f4_1500x1124.jpg",
          },
          {
            id: 9,
            name: "Bisti/De-Na-Zin",
            url:
              "https://th.bing.com/th/id/R.c3285b22c228ccd85b5d18a1e61a524c?rik=BARCQoSiQowpbg&riu=http%3a%2f%2fstatic.asiawebdirect.com%2fm%2fbangkok%2fportals%2fbali-indonesia-com%2fhomepage%2ftop10%2ftop10-attractions-ubud%2fpagePropertiesImage%2fbali-indonesia-travel-tours-guide74.jpg&ehk=DeDylUdF%2fn2QQbN0aKMFZP4x1w3v9i%2fc%2bngmYDD%2fQ3Q%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            id: 10,
            name: "Matera",
            url:
              "https://th.bing.com/th/id/R.bb5c964479ba4b84448fd2a01ec8a9e8?rik=kEY47KdjvT99eA&riu=http%3a%2f%2fwww.albergoitalia.com%2fimg%2fTOP%2fmatera2.jpg&ehk=5y3mL28uvRn%2fsGeR9EqjUu0Hs8v3V6II3h6A7ULMF5U%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            id: 11,
            name: 'Caño Cristales',
            url:
              "https://th.bing.com/th/id/R.b9cc39a6a32530f8e0d4b971651ec44a?rik=WhdCjrQdoASKhw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-u-x-KRsOKvU%2fVFdJcWrNTPI%2fAAAAAAABCcg%2ftSwtD8lXBSA%2fs1600%2fColombia_Cano_Cristales.jpg&ehk=CAmy%2fKWzdRjU7HOEm%2bYGoEOANeK9pROjHA0Pvg5rexg%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            id: 12,
            name: "Cairo",
            url:
              "https://th.bing.com/th/id/R.3385a2178e70c0e1d374967c6bdaf22c?rik=iRsec%2bWlpgwZFA&pid=ImgRaw&r=0",
          }
      ]

    const _renderItem = ({item, index}) => {
        return (
            <View key={item.id} style={styles.slide}>
                <ImageBackground source={{ uri: item.url }} style={styles.image}>
                      <Text style={styles.title}>{ item.name }</Text>
                </ImageBackground>
            </View>
        )
    }
 
    return (
        <View style={styles.carouselContain}>
        <Carousel
                ref={(c) => { _carousel = c; }}
                data={arrayCities}
                sliderWidth={410}
                itemWidth={400}
                renderItem={_renderItem}
                layout={"stack"}
                loop={true}
                autoplay={true}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    title:{
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        backgroundColor: "#2f2f6ba0",
        width: 400,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    carouselContain:{
        marginTop:20,
        marginBottom:20,
        justifyContent:"center"
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 300,
        width: "95%"
    },
})

export default CarouselImg