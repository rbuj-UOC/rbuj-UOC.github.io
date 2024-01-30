#!/bin/bash

SUBJECT="Intel·ligència artificial avançada"
if [ ! -d "${SUBJECT}" ]; then
  git clone git@github.com:rbuj-UOC/M1.204.git "${SUBJECT}"
fi

SUBJECT="Aprenentatge automàtic"
if [ ! -d "${SUBJECT}" ]; then
  git clone git@github.com:rbuj-UOC/22.418.git "${SUBJECT}"
fi

SUBJECT="Bases de dades analítiques"
if [ ! -d "${SUBJECT}" ]; then
  git clone git@github.com:rbuj-UOC/M2.988-pacs.git "${SUBJECT}"
fi

SUBJECT="Fonaments de programació per a la ciència de dades"
if [ ! -d "${SUBJECT}" ]; then
  git clone git@github.com:rbuj-UOC/22.401.git "${SUBJECT}"
  cd "${SUBJECT}"
  git submodule update --init --recursive
  cd ..
fi

SUBJECT="Programació per a la ciència de dades"
if [ ! -d "${SUBJECT}" ]; then
  git clone git@github.com:rbuj-UOC/22.403.git "${SUBJECT}"
  cd "${SUBJECT}"
  git submodule update --init --recursive
  cd ..
fi

SUBJECT="Programació per a la ciència de dades (PACS)"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="22.403-"
  for i in pacs pac4
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi

SUBJECT="Ús de bases de dades"
if [ ! -d "${SUBJECT}" ]; then
  git clone https://github.com/rbuj-UOC/05.567 "${SUBJECT}"
fi

# Màster universitari en enginyeria informàtica (MUEI)

SUBJECT="Computació d'altes prestacions"
if [ ! -d "${SUBJECT}" ]; then
  git clone git@github.com:rbuj-UOC/M1.209.git "Computació d'altes prestacions"
fi

# Màster universitari de desenvolupament de llocs i aplicacions web

SUBJECT="Desenvolupament back-end amb PHP"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M1.203-"
  for i in PAC3 PAC4
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi

SUBJECT="Desenvolupament front-end amb frameworks JavaScript"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M4.254-PAC"
  for (( i=1; i<=7; i++ ))
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi

SUBJECT="Desenvolupament front-end avançat"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M4.256-"
  for i in PAC1 PAC2 PAC3 PAC4 PAC5 PAC6 Ejemplos
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
      if [ -f "${DIR}/.gitmodules" ]; then
        cd "${DIR}"
        git submodule update --init --recursive
        cd ..
      fi
    fi
  done
  cd ..
fi

SUBJECT="Eines HTML i CSS I"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M4.257-PAC"
  for (( i=1; i<=3; i++ ))
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi

SUBJECT="Eines HTML i CSS II"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M4.258-PAC"
  for (( i=1; i<=3; i++ ))
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi

SUBJECT="HTML i CSS"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M4.252-PAC"
  for (( i=1; i<=3; i++ ))
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi

SUBJECT="Programació JavaScript per a programadors"
mkdir -p "${SUBJECT}"
if [ -d "${SUBJECT}" ]; then
  cd "${SUBJECT}"
  BASE_DIR="M4.253-"
  for i in PAC1 PAC2 PAC3 PAC4 exercicis
  do
    DIR="${BASE_DIR}${i}"
    if [ ! -d "${DIR}" ]; then
      git clone git@github.com:rbuj-UOC/${DIR}.git
    fi
  done
  cd ..
fi
