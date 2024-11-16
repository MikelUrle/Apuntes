package com.urle.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.urle.model.Jugador;
import com.urle.model.PosicionEnEL11;
import com.urle.repository.EquipoRepository;
import com.urle.repository.JornadaRepository;
import com.urle.repository.JugadoresRepository;
import com.urle.repository.PosicionEnEl11Repository;
import com.urle.repository.PosicionRepository;
import com.urle.repository.PuntuacionRepository;

@Controller
public class InicioController {
	

	@Autowired
	private EquipoRepository equiposRepo;
	
	// Solicitud inicial
	@RequestMapping("/")
	public String paginaPrincipal(Model model) {

		model.addAttribute("atr_lista_jugadores", jugadoresRepo.findAll());
		model.addAttribute("atr_lista_puntuacion", puntuacionRepo.findAll());
		model.addAttribute("atr_lista_posiciones11", posicion11Repo.findAll());
		model.addAttribute("atr_lista_equipos", equiposRepo.findAll());
		model.addAttribute("atr_lista_posiciones", posicionRepo.findAll());
		
		return "index";
	}
	
}
