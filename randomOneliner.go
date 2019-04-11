package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"time"
)

const urlBase = "https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/"

func getURL(url string) string {
	resp, err := http.Get(url)
	if err != nil {
		log.Fatalln("error in http.Get:", err)
	}
	if resp.StatusCode != 200 {
		log.Fatalf("%s: %s\n", resp.Request.URL, resp.Status)
	}
	bytes, err := ioutil.ReadAll(resp.Body)
	defer resp.Body.Close()
	if err != nil {
		log.Fatalln("error in ioutil.ReadAll:", err)
	}
	return fmt.Sprintf("%s", bytes)
}

func main() {
	num, _ := strconv.Atoi(getURL(urlBase + "len"))
	rand.Seed(time.Now().UnixNano())
	index := rand.Intn(num)
	text := getURL(fmt.Sprintf("%s%d", urlBase, index))
	fmt.Println(text)
}
