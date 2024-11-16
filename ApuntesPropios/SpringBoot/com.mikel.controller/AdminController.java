package com.urle.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.antlr.v4.runtime.ParserInterpreter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.urle.model.Equipo;
import com.urle.model.Jornada;
import com.urle.model.Jugador;
import com.urle.model.Posicion;
import com.urle.model.PosicionEnEL11;
import com.urle.model.Contribucion;
import com.urle.repository.ContribucionRepository;
import com.urle.repository.EquipoRepository;
import com.urle.repository.JornadaRepository;
import com.urle.repository.JugadoresRepository;
import com.urle.repository.PosicionEnEl11Repository;
import com.urle.repository.PosicionRepository;
import com.urle.repository.PuntuacionRepository;
import com.urle.service.Servicios;

import jakarta.servlet.http.HttpSession;

@Controller
public class AdminController {
	
	// Añadimos las repos para poder usar las funciones
	@Autowired
	private EquipoRepository equiposRepo;
	
	@Autowired
	private JornadaRepository jornadaRepo;
	
	@Autowired
	private PosicionEnEl11Repository posicionEnEl11Repo;
	
	@Autowired
	private PosicionRepository posicionRepo;
	
	@Autowired
	private JugadoresRepository jugadorRepo;
	
	@Autowired
	private PuntuacionRepository puntuacionRepo;
	
	@Autowired
	private ContribucionRepository contribucionRepo;
	
    @Autowired
    private Servicios servicios;
	
    // Para cuando se quiera ir a ver la jornada con los partidos
	@RequestMapping("/jornada")
	public String jornada(Model model) {

		// Guardamos los datos en los atributos del modelo
		model.addAttribute("atr_lista_jornada", jornadaRepo.findAll());
		model.addAttribute("atr_lista_equipos", equiposRepo.findAll());
		
		// Devolvemos la vista 
		return "jornada";
	}
	
	// Filtro de goles de minimo a maximo
	@RequestMapping("/filtroMinAsist")
	public String filtroMinAsist(Model model) {

		model.addAttribute("atr_lista_jugadores", jugadorRepo.findAll());
		model.addAttribute("atr_lista_contribuciones",  contribucionRepo.findAllByOrderByAsistAsc());
		
		return "marcadores";	

	}

}

