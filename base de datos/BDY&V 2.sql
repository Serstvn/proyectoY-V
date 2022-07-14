-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2022 a las 00:29:51
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id` int(11) NOT NULL,
  `cargo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id`, `cargo`) VALUES
(1, 'VP'),
(2, 'ADMINISTRADOR DE CONTRATOS'),
(3, 'ADMINISTRACION'),
(4, 'ANALISTA DE NOMINA'),
(5, 'ANALISTA AMBIENTAL'),
(6, 'ANALISTA DE TALENTO HUMANO'),
(7, 'ANALISTA DE SOPORTE TECNICO'),
(8, 'ANALISTA DE CONTABILIDAD E IMPUESTOS'),
(9, 'ASISTENTE DE INGENIERO'),
(10, 'ASISTENTE DE ADMINISTRATIVO'),
(11, 'ASISTENTE DE MANTENIMIENTO Y LIMPIEZA'),
(12, 'ASISTENTE DE LOGISTICA DE OFERTAS'),
(13, 'AUXILIAR HSE'),
(14, 'TECNICO DISEÑO III'),
(15, 'GERENTE DE PROYECTO'),
(16, 'GERENTE DE PROCESOS MEDULARES'),
(17, 'GERENTE DE SERVICIOS TECNICOS'),
(18, 'GERENTE DE OFERTAS'),
(19, 'INGENIERO DE CALIDAD'),
(20, 'INGENIERO ASEG CALIDAD'),
(21, 'INGENIERO DE PROYECTOS'),
(22, 'INGENIERO HSE'),
(23, 'TECNICO CAD'),
(24, 'TECNICO DE DISEÑO'),
(25, 'TOPOGRAFO'),
(26, 'COORDINADOR DE CALIDAD'),
(27, 'COORDINADOR HSE'),
(28, 'COORDINADOR DE PLANIFICACION Y CONTROL'),
(29, 'COORDINADOR DE ADMIN DE CONTRATOS'),
(30, 'COORDINADOR DE DESARROLLO ORGANIZACIONAL'),
(31, 'COORDINADOR DE PLANIFICACION CORP Y PRESUPUES'),
(32, 'COORDINADOR DE ADMINISTRACIÓN'),
(33, 'COORDINADOR DE CONTABILIDAD, IMPUESTOS Y NOMI'),
(34, 'COORDINADOR DE INFRAESTRUCTURA Y SERVICIOS'),
(35, 'SENA'),
(36, 'ESTIMADOR DE COSTOS'),
(37, 'RECEPCIONISTA'),
(38, 'MENSAJERO'),
(39, 'CONTROLADOR DE DOCUMENTOS'),
(40, 'DISEÑADOR CAD'),
(41, 'FREELANCER'),
(42, 'PLANIFICACION'),
(43, 'SAT ECP'),
(44, 'ADMINISTRACION DE FINANZAS'),
(45, 'ADMINISTRADOR DE SISTEMAS'),
(46, 'COORDINADOR DE SISTEMAS'),
(47, 'GERENTE DE DEPARTAMENTO'),
(48, 'GERENTE COMERCIAL'),
(49, 'ING PROYECTOS I'),
(50, 'ING PROYECTOS II'),
(51, 'ING PROYECTOS III'),
(52, 'ING PROYECTOS IV'),
(53, 'TECNICO DISEÑO II');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cecos`
--

CREATE TABLE `cecos` (
  `id` int(11) NOT NULL,
  `ceco` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cecos`
--

INSERT INTO `cecos` (`id`, `ceco`) VALUES
(1, 'facturable'),
(2, 'OH');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `departamento` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `departamento`) VALUES
(1, 'CIVIL'),
(2, 'ADMINISTRACIÓN'),
(3, 'ELECTRICIDAD'),
(4, 'INGENIERIA'),
(5, 'INSTRUMENTACIÓN'),
(6, 'MECANICA Y TUBERIAS'),
(7, 'PROCESOS'),
(8, 'SISTEMAS Y TECNOLOGIA'),
(9, 'CONTABILIDAD'),
(10, 'GDO'),
(11, 'DESARROLLO ORGANIZACIONAL'),
(12, 'ADMINISTRACION DE CONTRATOS'),
(13, 'ASISTENCIA DE SERVICIOS ADMINITRATIVOS'),
(14, 'CALIDAD'),
(15, 'HSE'),
(16, 'PLANEACIÓN Y CONTROL'),
(17, 'OFERTAS'),
(18, 'SERVICIOS GENERALES'),
(19, 'GERENCIA DE PROCESOS MEDULARES'),
(20, 'VICEPRECIDENCIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `Id` int(11) NOT NULL,
  `tipoDoc` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `documentos`
--

INSERT INTO `documentos` (`Id`, `tipoDoc`) VALUES
(1, 'CC'),
(2, 'CE'),
(3, 'Otro'),
(4, 'Prueba');
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `documentos_id` int(11) NOT NULL,
  `documento` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `gerencias_id` int(11) NOT NULL,
  `departamentos_id` int(11) NOT NULL,
  `cargos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `documentos_id`, `documento`, `nombre`, `apellido`, `gerencias_id`, `departamentos_id`, `cargos_id`) VALUES
(1, 1, '1233902987', 'JHON ANDERSSON', 'ESPINOSA VARGAS', 3, 4, 36),
(2, 1, '359280', 'OSWALDO JOSE', 'MAGO RODRIGUEZ', 3, 2, 3),
(3, 1, '399972', 'INGRID', 'MORENO', 3, 2, 3),
(4, 1, '402005', 'CARLOS ENRIQUE ', 'SALAS BROWN', 3, 2, 3),
(5, 1, '402342', 'LEOPOLDO ENRIQUE ', 'HERNANDEZ VALENCIA', 3, 2, 3),
(6, 1, '404053', 'FREDDA FERNANDA', 'PEREIRA WALKER', 3, 2, 3),
(7, 1, '405337', 'DISNEY YOCAIMA ', 'APONTE DE PALACIO', 3, 2, 3),
(8, 1, '419579', 'JOSE JAVIER ', 'MOSQUERA LOPEZ', 3, 2, 3),
(9, 1, '610138', 'YENIFFER CAROLINA ', 'MENDEZ ARRIECHE', 3, 2, 3),
(10, 1, '641583', 'MARIA GABRIELA ', 'CARIDAD DE MARIN', 3, 2, 3),
(11, 1, '766083', 'DAVID JOSE DE LA ', 'DE LA ROSA MENDOZA', 3, 2, 3),
(12, 1, '917631', 'MARCO ALEJANDRO ', 'BRICE?O ROJAS', 3, 2, 3),
(13, 1, '1018241', 'RAFAEL EDUARDO ', 'HEEMSEN BLANCO', 3, 2, 3),
(14, 1, '1078164', 'LEIDY BEATRIZ ', 'LOPEZ CASTILLO', 3, 2, 3),
(15, 1, '1183940', 'NUMA LEANDRO ', 'ROJAS MENESES', 3, 2, 3),
(16, 1, '19392759', 'LUIS EDUARDO ', 'RAMOS PATIÑO', 3, 2, 3),
(17, 1, '22521192', 'REBECA SOFIA ', 'MANCILLA GOMEZ', 3, 2, 3),
(18, 1, '52077263', 'MARIA ANTONIA ', 'LEMUS QUIROGA', 3, 2, 3),
(19, 1, '52279275', 'YURIAM SUGEIL ', 'AVILES AVILES', 3, 2, 3),
(20, 1, '52359837', 'SANDRA ', 'BENAVIDES', 3, 2, 3),
(21, 1, '52379437', 'MARIE KATHERINE', 'PEREZ BENITEZ', 3, 2, 3),
(22, 1, '52717484', 'MARIA TERESA', 'ESCOBAR HEREDIA', 3, 5, 3),
(23, 1, '52816953', 'KATHERINE', 'CAMACHO CELIS', 3, 5, 3),
(24, 1, '53155295', 'FLOR FARNEDY ', 'FLOREZ SERNA', 3, 5, 3),
(25, 1, '72008441', 'HAROLD ARMANDO ', 'HERRERA HERRERA', 3, 5, 3),
(26, 1, '72233705', 'JOSE MIGUEL', 'SHAIK DIAZ', 3, 5, 3),
(27, 1, '79006120', 'CARLOS ANDRES ', 'LOPEZ DIAZ', 3, 2, 3),
(28, 1, '79335491', 'JUAN FRANCISCO ', 'GALEANO RODRIGUEZ', 3, 2, 3),
(29, 1, '79628712', 'FRANKLIN PAOLO ', 'FLECHAS PARRA', 3, 2, 3),
(30, 1, '79630823', 'CARLOS ABRAHAM ', 'CASTILLO ROJAS', 3, 2, 3),
(31, 1, '79718358', 'EDWIN HERNAN ', 'SUAREZ PARRA', 3, 2, 3),
(32, 1, '79979767', 'LEONARDO NICOLAS', 'NIETO SIERRA', 3, 2, 3),
(33, 1, '80074607', 'GERMAN ALEXANDER ', 'MOLINA CALDERON', 3, 2, 3),
(34, 1, '80091584', 'JUAN JOSE ', 'GOMEZ BAHAMON', 3, 2, 3),
(35, 1, '80811029', 'DAYRO HERNANDO ', 'RODRIGUEZ NI?O', 3, 2, 3),
(36, 1, '80820152', 'FREDY JAVIER ', 'LARA QUINTERO', 3, 2, 3),
(37, 1, '80826732', 'DYDDIER GUSTAVO', ' MORA PARDO', 3, 2, 3),
(38, 1, '84454922', 'JULIO CESAR ', 'GRANADOS RUIZ', 3, 2, 3),
(39, 1, '86389198', 'GERARDO  MIGUEL ', 'ACABAN RAPOSO', 3, 2, 3),
(40, 1, '144748112', 'FREDDY JOSE', 'VILLALOBOS FUENMAYOR', 3, 2, 3),
(41, 1, '1000135362', 'ERIKA ESTEFANIA ', 'PORRAS TOBO', 3, 1, 3),
(42, 1, '1000733705', 'LAURA LORENA ', 'ESTUPI?AN RODRIGUEZ', 3, 1, 3),
(43, 1, '1001184299', 'MARIA FERNANDA ', 'PEREA FUQUEN', 3, 1, 3),
(44, 1, '1005368000', 'ANYELA', 'PUENTES VALENCIA', 3, 1, 3),
(45, 1, '1007027874', 'LUZ ADRIANA ', 'BUENO VERA', 3, 1, 3),
(46, 1, '1007389286', 'PAMELA  ANDREA ', 'SOTO CASTILLO', 3, 1, 3),
(47, 1, '1010238824', 'JHOAN SEBASTIAN ', 'DIAZ GOMEZ', 3, 1, 3),
(48, 1, '1012340369', 'LORENA ANDREA ', 'BERNAL TIQUE', 3, 1, 3),
(49, 1, '1012422995', 'SINDY TATIANA ', 'PIRACOCA PERALTA', 3, 1, 3),
(50, 1, '1013611619', 'JOHN FREDY ', 'NIETO VARGAS', 3, 1, 3),
(51, 1, '1014246961', 'EDGAR MAURICIO ', 'BELLO SUAREZ', 3, 1, 3),
(52, 1, '1014257378', 'ANGIE LISBETH ', 'PORRAS BEDOYA', 3, 1, 3),
(53, 1, '1014280109', 'REINER NICOLAS ', 'GARCIA ARIZA', 3, 1, 3),
(54, 1, '1015416102', 'JUAN MANUEL ', 'LOPEZ CELY', 3, 1, 3),
(55, 1, '1015419158', 'LORENA ', 'CIFUENTES DIAZ', 3, 1, 3),
(56, 1, '1015469896', 'LINA MARIA', 'BARON PIÑEROS', 3, 1, 3),
(57, 1, '1015484234', 'CRISTIAN ANDRES', 'MORENO INFANTE', 3, 1, 3),
(58, 1, '1016046966', 'JUAN CAMILO ', 'MACIAS ORTIZ', 3, 1, 3),
(59, 1, '1016057671', 'PAULA MARCELA', ' VASQUEZ TAPIA', 3, 2, 3),
(60, 1, '1018431962', 'MARITZA', 'JACOME PEREZ', 3, 1, 3),
(61, 1, '1018443180', 'ABDUL STEWIN ', 'ZULUAGA SALCEDO', 3, 1, 3),
(62, 1, '1018457520', 'KAREN LORENA ', 'PARRADO JIMENEZ', 3, 1, 3),
(63, 1, '1018459759', 'DAVID LEONARDO ', 'DUARTE CANO', 3, 1, 3),
(64, 1, '1018483327', 'DIANA ROCIO ', 'ORJUELA CAÑON', 3, 1, 3),
(65, 1, '1019028236', 'CINDY PAOLA ', 'BEJARANO BEJARANO', 3, 1, 3),
(66, 1, '1020742431', 'CARLOS ANDRES', 'PARDO GARCIA', 3, 1, 3),
(67, 1, '1020788273', 'CARLOS ALBERTO ', 'ASTROZ LOPEZ', 3, 1, 3),
(68, 1, '1020825150', 'INGRID JULIETH', 'QUIROGA NOVOA', 3, 1, 3),
(69, 1, '1023913110', 'ADRIANA MERCEDES', 'MORA NAJAR', 3, 1, 3),
(70, 1, '1024523536', 'ANA YIBY ', 'PORTILLA CHILITO', 3, 1, 3),
(71, 1, '1024569389', 'JOHAN NAHUM', 'RINCON ORTIZ', 3, 1, 3),
(72, 1, '1024581049', 'DUSTIN NELSON', 'JIMENEZ ESCOBAR', 3, 1, 3),
(73, 1, '1030553271', 'JULIAN  DAVID ', 'CARO TORRES', 3, 1, 3),
(74, 1, '1030553582', 'JULIO CESAR ', 'RAMIREZ ORTIZ', 3, 1, 3),
(75, 1, '1030581896', 'JENNY ANDREA ', 'LESMES GARZON', 3, 1, 3),
(76, 1, '1030582469', 'DANIEL FERNANDO', 'GOMEZ SANCHEZ', 3, 1, 3),
(77, 1, '1030693753', 'SEBASTIAN DEUX', 'MORA HERNANDEZ', 3, 1, 3),
(78, 1, '1032474303', 'JENNY SARAY ', 'PULIDO LOPEZ', 3, 1, 3),
(79, 1, '1053846416', 'ANDRES MAURICIO ', 'DAVILA CARDONA', 3, 1, 3),
(80, 1, '1072647927', 'PEDRO ANTONIO ', 'BERNAL MORENO', 3, 1, 3),
(81, 1, '1073236317', 'LEIDY JOHANNA ', 'PIRA OLIVEROS', 3, 1, 3),
(82, 1, '1075284773', 'SEBASTIAN ', 'REYES SAENZ', 3, 1, 3),
(83, 1, '1075676491', 'CINDY XIMENA ', 'ORJUELA MOLANO', 3, 1, 3),
(84, 1, '1076666984', 'MIGUEL ANGEL ', 'GARCIA MOLINA', 3, 1, 3),
(85, 1, '1081515003', 'ERIKA JULIETH ', 'COLLAZOS TRUJILLO', 3, 1, 3),
(86, 1, '1081764639', 'ANYER ALEXANDER ', 'BRICEÑO', 3, 1, 3),
(87, 1, '1098665641', 'ANDRES FELIPE ', 'PUENTES MARIN', 3, 1, 3),
(88, 1, '1098669765', 'JUAN CAMILO ', 'JONES ROJAS', 3, 1, 3),
(89, 1, '1098703494', 'MAYERLY ', 'CALDERON SIERRA', 3, 1, 3),
(90, 1, '1098710474', 'LIZETH KATHERINE ', 'FERNANDEZ MEJIA', 3, 1, 3),
(91, 1, '1098780449', 'JOSE MANUEL ', 'GUERRERO SERRANO', 3, 1, 3),
(92, 1, '1101758486', 'SERGIO ALEJANDRO ', 'CASTAÑEDA MEJIA', 3, 1, 3),
(93, 1, '1103115087', 'KENDY VANESA ', 'PEÑA QUIROZ', 3, 1, 3),
(94, 1, '1110468668', 'LUISA FERNANDA ', 'DIAZ NIÑO', 3, 1, 3),
(95, 1, '1129577606', 'SAID NAIR ARJONA ', 'ARJONA ESCORCIA', 3, 1, 3),
(96, 1, '1130649244', 'YEISON ALEXANDER ', 'BOCANEGRA MARTINEZ', 3, 1, 3),
(97, 1, '1143333573', 'JORGE ALBERTO ', 'MARTINEZ ORTIZ', 3, 1, 3),
(98, 2, '3523452345235', 'josejosejose', 'josejosejose', 3, 1, 4),
(99, 2, '454534523', 'qqqqqqqqqq', 'ggggggggggggg', 4, 1, 2),
(100, 1, '54656546', 'josejosejose', 'juliolujio', 5, 2, 4),
(101, 1, '23452345', 'josejosejose', 'josejosejose', 6, 4, 46),
(102, 2, '111111111', 'ggggggggggggggggg', 'gggggggggggggggggggggg', 5, 18, 18),
(103, 2, '1111111111', 'GGGG', 'GGGGG', 6, 14, 26);

-- -----------------------------------------------------
--
-- Estructura de tabla para la tabla `gerencias`
--

CREATE TABLE `gerencias` (
  `id` int(11) NOT NULL,
  `gerencia` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `gerencias`
--

INSERT INTO `gerencias` (`id`, `gerencia`) VALUES
(1, 'VIP'),
(2, 'GMP'),
(3, 'GST'),
(4, 'ADMIN Y FIN'),
(5, 'GDO'),
(6, 'OF'),
(7, 'SG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `ceco_id` int(11) NOT NULL,
  `cliente` varchar(45) DEFAULT NULL,
  `nomCorto` varchar(45) DEFAULT NULL,
  `empleados_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `codigo`, `ceco_id`, `cliente`, `nomCorto`, `empleados_id`) VALUES
(1, '3000-GP', 2, 'DEPARTAMENTO', 'DPTO', 1),
(2, '3000-GST', 1, 'ASISTENCIA A PROYECTOS', 'GST', 1),
(3, '3056', 1, 'FRONTERA', 'FRONTERA PESADOS', 1),
(4, '3060', 1, 'ECP', 'CDP ECP', 1),
(5, '3066', 1, 'FRONTERA', 'FRONTERA LIVIANOS', 1),
(6, '3066 ST', 1, 'FRONTERA', 'SALA TECNICA CP6', 1),
(7, '3069', 1, 'FRONTERA', 'FRONTERA PESADOS', 1),
(8, '3071', 1, 'TECPETROL', 'CONTRATO MARCO', 1),
(9, '3072', 1, 'ISMOCOL', 'TUBO 30\" 11KM', 1),
(10, '3072-3', 1, 'ISMOCOL', 'TUBO 30\" 4,7KM', 1),
(11, '3079', 1, 'SAT ECP', 'SAT ECP', 1),
(12, '3080', 1, 'MANSAROVAR/ECP', 'ID SIAR', 1),
(13, '3082', 1, 'SAT ECP', 'SAT ECP', 1),
(14, '3083', 1, 'HOCOL', 'HOCOL', 1),
(15, 'D0001', 1, NULL, 'DEPARTAMENTO', 1),
(16, 'D0002', 1, NULL, 'VACACIONES', 4),
(17, 'D0003', 1, NULL, 'PERMISO AUTORIZADO', 4),
(18, 'D0004', 1, NULL, 'INCAPACIDAD', 4),
(19, 'D0005', 1, NULL, 'FESTIVO', 4),
(20, 'D0006', 1, NULL, 'SIN ASIGNACION', 4),
(21, 'D0007', 1, NULL, 'AUSENCIA AUTORIZADA POR LA EMPRESA', 4),
(22, 'D0008', 1, NULL, 'PERMISO RECUPERABLE', 2),
(23, 'zzzzzzzzz', 2, 'zzzzzzzzzz', 'zzzzzzzz', 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `staffing`
--

CREATE TABLE `staffing` (
  `id` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `fechaInicial` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `staffing`
--

INSERT INTO `staffing` (`id`, `id_empleado`, `id_proyecto`, `fechaInicial`,`fechaFinal`, `valor`) VALUES
(1, 6, 2, '2022-06-01', '2022-06-30', 1),
(2, 1, 4, '2022-06-01', '2022-06-30', 1),
(3, 2, 7, '2022-06-01', '2022-06-30', 1),
(4, 8, 9, '2022-06-01', '2022-06-30', 1),
(5, 4, 3, '2022-06-16', '2022-06-30', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cecos`
--
ALTER TABLE `cecos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_empleados_gerencias_idx` (`gerencias_id`),
  ADD KEY `fk_empleados_departamentos_idx` (`departamentos_id`),
  ADD KEY `fk_empleados_cargos_idx` (`cargos_id`),
  ADD KEY `fk_documentos_id` (`documentos_id`);

--
-- Indices de la tabla `gerencias`
--
ALTER TABLE `gerencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_proyectos_ceco_idx` (`ceco_id`),
  ADD KEY `fk_proyectos_empleados1_idx` (`empleados_id`);

--
-- Indices de la tabla `staffing`
--
ALTER TABLE `staffing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_empleados_id` (`id_empleado`),
  ADD KEY `fk_proyectos_id` (`id_proyecto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `cecos`
--
ALTER TABLE `cecos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

-- AUTO_INCREMENT de la tabla `gerencias`
--
ALTER TABLE `gerencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `staffing`
--
ALTER TABLE `staffing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `fk_documentos_id` FOREIGN KEY (`documentos_id`) REFERENCES `documentos` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_empleados_cargos` FOREIGN KEY (`cargos_id`) REFERENCES `cargos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_empleados_departamentos` FOREIGN KEY (`departamentos_id`) REFERENCES `departamentos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_empleados_gerencias` FOREIGN KEY (`gerencias_id`) REFERENCES `gerencias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `fk_proyectos_ceco` FOREIGN KEY (`ceco_id`) REFERENCES `cecos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_proyectos_empleados` FOREIGN KEY (`empleados_id`) REFERENCES `empleados` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `staffing`
--
ALTER TABLE `staffing`
  ADD CONSTRAINT `fk_empleados_id` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id`),
  ADD CONSTRAINT `fk_proyectos_id` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id`);
COMMIT;
