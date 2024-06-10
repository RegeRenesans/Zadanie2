pobranie kosu źródłowego: actions/checkout@v2
konfiguracja docker bildx: docker/setup-buildx-action@v2
konfiguracja QUEM: docker/setup-qemu-action@v2
logowanie do github container : ocker/login-action@v2
logowanie do docker hub: docker/login-action@v2
cashowanie warstw docker: actions/cache@v2
budowanie obrazu docker: docker/build-push-action@v3

