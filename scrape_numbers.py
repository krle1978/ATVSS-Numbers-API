import os
import requests
from bs4 import BeautifulSoup

# URL web stranice koju želimo scrapovati
url = "https://courses.cs.washington.edu/courses/cse154/18au/sections/04/code/starter/number-trivia/numbers.html"

# Pošalji GET zahtev na zadatu URL adresu
response = requests.get(url)

# Proveri da li je zahtev uspešan
if response.status_code == 200:
    # Parsiraj sadržaj stranice koristeći BeautifulSoup
    soup = BeautifulSoup(response.content, "html.parser")
    
    # Generiši HTML sadržaj
    html_content = soup.prettify()

    # Naziv fajla
    file_name = "index.html"

    # Proveri da li fajl postoji i obriši ga ako postoji
    if os.path.exists(file_name):
        os.remove(file_name)
    
    # Sačuvaj HTML sadržaj u "index.html" fajl
    with open(file_name, "w", encoding="utf-8") as file:
        file.write(html_content)
    
    print(f"HTML fajl '{file_name}' uspešno generisan!")
else:
    print(f"Zahtev nije uspeo sa status kodom: {response.status_code}")
