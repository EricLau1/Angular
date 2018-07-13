
package main

import(
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"../github.com/gorilla/mux"
	"io/ioutil"
	"strconv"
)

type Produto struct {
	Id int `json:"id"`
	Descricao string `json:"descricao"`
	Quantidade int `json:"quantidade"`
	Valor float64 `json:"valor"`
}

var produtos []Produto

func main() {

	// gerando variaveis
	p1 := Produto{ 1, "item 1", 10, 990.66 }
	produtos = append(produtos, p1)

	p2 := Produto{ 2, "item 2", 20, 990.66 }
	produtos = append(produtos, p2)

	p3 := Produto{ 3, "item 4", 30, 990.66 }
	produtos = append(produtos, p3)

		fmt.Println(produtos)

	route := mux.NewRouter().StrictSlash(true)

	route.HandleFunc("/produtos", getProdutos).Methods("GET")

	route.HandleFunc("/produtos/{id}", getProduto).Methods("GET")

	route.HandleFunc("/produtos", postProduto).Methods("POST")

	route.HandleFunc("/produtos/update/{id}", putProduto).Methods("POST")

	route.HandleFunc("/produtos/delete/{id}", deleteProduto).Methods("GET")

	log.Fatal(http.ListenAndServe(":3000", route))


}


func getProdutos(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	json.NewEncoder(w).Encode(produtos)

}


func getProduto(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")


	param := mux.Vars(r)

	id, _ := strconv.Atoi(param["id"])

	for _,p := range produtos {
		if p.Id == id {
			json.NewEncoder(w).Encode(p)
			return

		}
	}

	json.NewEncoder(w).Encode(&Produto{})

}

func postProduto(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")


	var p Produto

	body, _ := ioutil.ReadAll(r.Body)

	json.Unmarshal(body, &p)

	produtos = append(produtos, p)

	json.NewEncoder(w).Encode(produtos)

}


func putProduto(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")


	param := mux.Vars(r)

	id, _ := strconv.Atoi(param["id"])

	for index,p := range produtos {
		if p.Id == id {

			var p Produto
			_ = json.NewDecoder(r.Body).Decode(&p)
			produtos[index] = p
			json.NewEncoder(w).Encode(p)
			return

		}
	}

	json.NewEncoder(w).Encode(produtos)

}

func deleteProduto(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")


	param := mux.Vars(r)

	id, _ := strconv.Atoi(param["id"])

	for index,p := range produtos {
		if p.Id == id {

			produtos = append(produtos[:index], produtos[index + 1:]...)


			json.NewEncoder(w).Encode(produtos)
			return

		}
	}

	json.NewEncoder(w).Encode(produtos)

}