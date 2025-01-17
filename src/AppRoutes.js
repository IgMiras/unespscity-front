import React from 'react';
import { useState, useEffect, useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import AdminRoutes from './AdminRoutes';

import Dashboard from './pages/administrator/index'; // DASHBOARD PARA O ADMIN
import Microsservices from './pages/administrator/requested-services';
import AdminHistoric from './pages/administrator/historic';
import AssociacaoComercialOpcoes from './pages/administrator/requested-services/commercial-association';
import ComunicacaoOpcoes from './pages/administrator/requested-services/communication';
import AnimaisDomesticosOpcoes from './pages/administrator/requested-services/domestic-animals';
import MeioAmbienteOpcoes from './pages/administrator/requested-services/environment';
import FaunaFloraOpcoes from './pages/administrator/requested-services/fauna-flora';
import FamiliasCarentesOpcoes from './pages/administrator/requested-services/needy-families';
import ControlePragasOpcoes from './pages/administrator/requested-services/pest-control';
import AdministracaoPublicaOpcoes from './pages/administrator/requested-services/public-aministration';
import SensoriamentoRemotoOpcoes from './pages/administrator/requested-services/remote-sensing';
import RemocaoDetritosOpcoes from './pages/administrator/requested-services/road-maintenance';
import ConservacaoRuralOpcoesOpcoes from './pages/administrator/requested-services/rural-green-areas-conservation';
import VigilanciaSanitariaOpcoes from './pages/administrator/requested-services/sanitary-surveillance';
import SegurancaDefesaCivilOpcoes from './pages/administrator/requested-services/security-defense';
import AssistenciaSocialOpcoes from './pages/administrator/requested-services/social-care';
import ServicosSociaisOpcoes from './pages/administrator/requested-services/social-services';
import ConservacaoUrbanaOpcoes from './pages/administrator/requested-services/urban-conservation';

import Home from './pages/home'; // Home e Login //
import Login from './pages/login';
import PasswordReset from './pages/password-reset';
import BaseMap from './services/map-pages/baseMap';

import UserLocation from './pages/user-location';
import Sistema from './pages/system';
import LocalContext from './pages/user-location/Context';

import AdminGestores from './pages/administrator/public-administration/know-city-managers'; // Administração Pública //
import Gestores from './pages/public-administration/know-city-managers';
import AdminProposedLegislation from './pages/administrator/public-administration/proposed-legislation';
import ProposedLegislation from './pages/public-administration/proposed-legislation';
import AdminAntiCorruptionCenter from './pages/administrator/public-administration/anti-corruption-center';
import AntiCorruptionCenter from './pages/public-administration/anti-corruption-center';

import AdminNoticias from './pages/administrator/communication/news'; // Central de Notificação e Comunicação //
import Noticias from './pages/communication/news';
import Sugestoes from './pages/communication/suggestion-complaints';

import AdminTelefones from './pages/administrator/social-care/useful-contacts'; // Assistência Social //
import AdminLocaisUteis from './pages/administrator/social-care/useful-locations';
import AdminTumulos from './pages/administrator/social-care/grave-registration';
import AdminProgramacaoCultural from './pages/administrator/social-care/cultural-program';
import Telefones from './pages/social-care/useful-contacts';
import LocaisUteis from './pages/social-care/useful-locations';
import Tumulos from './pages/social-care/grave-registration';
import ProgramacaoCultural from './pages/social-care/cultural-program';

import AdminAnimaisAbandonados from './pages/administrator/domestic-animals/abandoned-animals'; // Animais Domésticos //
import AdminAnimaisPerdidos from './pages/administrator/domestic-animals/lost-animals';
import AdminAdocaoAnimais from './pages/administrator/domestic-animals/adoption-animals';
import AnimaisAbandonados from './pages/domestic-animals/abandoned-animals';
import AnimaisPerdidosOpcoes from './pages/domestic-animals/lost-animals/option';
import AnimaisPerdidosNovo from './pages/domestic-animals/lost-animals/index1';
import AnimaisPerdidosLista from './pages/domestic-animals/lost-animals/index2';
import AnimaisSinantropicos from './pages/domestic-animals/synanthropic-animals';
import AdocaoAnimais from './pages/domestic-animals/adoption-animals/adoptionList';
import NovasDoacoesAnimais from './pages/domestic-animals/adoption-animals/newAdoption';
import AdocaoAnimaisOpcoes from './pages/domestic-animals/adoption-animals/option';

import AdminAnimaisMortos from './pages/administrator/road-maintenance/removal-of-dead-animals'; // Remoção de Detritos //
import AnimaisMortos from './pages/road-maintenance/removal-of-dead-animals';
import AdminResiduosSolidos from './pages/administrator/road-maintenance/removal-trash';
import ResiduosSolidos from './pages/road-maintenance/removal-trash';

import AdminAdocaoAreas from './pages/administrator/environment/public-areas-adoption'; // Meio Ambiente //
import AdminMonitoramentoTempo from './pages/administrator/environment/monitoring';
//import PublicAreasMap from "./pages/environment/public-areas-adoption/map/index";
import AdocaoAreasOpcoes from './pages/environment/public-areas-adoption/option';
import AdocaoAreasDisponiveis from './pages/environment/public-areas-adoption/index1';
import AdocaoAreasAdotadas from './pages/environment/public-areas-adoption/index2';
import AdocaoAreasRegras from './pages/environment/public-areas-adoption/index3';
import MonitoramentoTempo from './pages/environment/climate-monitoring';
//import PollutionMap from "./pages/environment/climate-monitoring/map";
import RefuseCollection from './pages/environment/refuse-collection';
import AdminRefuseCollection from './pages/administrator/environment/refuse-collection';

import AdminMausTratosAnimais from './pages/administrator/fauna-flora/animal-violence'; //Fauna e Flora//
import AdminAnimaisSilvestres from './pages/administrator/fauna-flora/wild-animals';
import AnimaisSilvestres from './pages/fauna-flora/wild-animals';
import MausTratosAnimais from './pages/fauna-flora/animal-violence';
import InformationAboutTrees from './pages/fauna-flora/information-about-trees';
import AdminInformationAboutTrees from './pages/administrator/fauna-flora/information-about-trees';

import AdminParques from './pages/administrator/rural-green-areas-conservation/parks'; // Conservação Rural e Áreas Verdes //
import AdminPontes from './pages/administrator/rural-green-areas-conservation/rural-road-bridges';
import AdminPracas from './pages/administrator/rural-green-areas-conservation/plazas';
import Parques from './pages/rural-green-areas-conservation/parks';
import Pontes from './pages/rural-green-areas-conservation/rural-road-bridges';
import Pracas from './pages/rural-green-areas-conservation/plazas';

import AdminHomelessPeople from './pages/administrator/needy-families/homeless-people'; // Familias Carentes //
import AdminNeedyFamilies from './pages/administrator/needy-families/needy-families-register';
import HomelessPeople from './pages/needy-families/homeless-people';
import AdminDescarteSolidario from './pages/administrator/needy-families/solidary-disposal';
import NeedyFamiliesOption from './pages/needy-families/needy-families-option';
import NeedyFamiliesRegister from './pages/needy-families/needy-families-register';
import NeedyFamiliesList from './pages/needy-families/needy-families-list';
import DescarteSolidario from './pages/needy-families/solidary-disposal';

import AdminIluminacao from './pages/administrator/urban-conservation/street-lighting'; // Conservação Urbana //
import AdminInstalacoes from './pages/administrator/urban-conservation/facilities-inspection';
import AdminMonumentos from './pages/administrator/urban-conservation/fountains-monuments';
import AdminPavimentacao from './pages/administrator/urban-conservation/pavement';
import AdminVias from './pages/administrator/urban-conservation/public-roads';
import Instalacoes from './pages/urban-conservation/facilities-inspection';
import Iluminacao from './pages/urban-conservation/street-lighting';
import Monumentos from './pages/urban-conservation/fountains-monuments';
import Pavimentacao from './pages/urban-conservation/pavement';
import Vias from './pages/urban-conservation/public-roads';

import AdminFeiras from './pages/administrator/social-services/fair'; // Serviços Sociais //
import Feiras from './pages/social-services/fair';
import FairMap from './pages/social-services/fair/map/index';
import AdminDiaristas from './pages/administrator/social-services/diarist-janitors';
import DiaristasOpcoes from './pages/social-services/diarist-janitors/option';
import DiaristasNovo from './pages/social-services/diarist-janitors/index1';
import DiaristasLista from './pages/social-services/diarist-janitors/index2';

import AdminTheftRegister from './pages/administrator/security-defense/theft-register'; // Segurança e Defesa //
import AdminVictimsOfDomesticViolence from './pages/administrator/security-defense/victims-of-domestic-violence';
import AdminAccidentRecords from './pages/administrator/security-defense/accident-records';
import TheftRegister from './pages/security-defense/theft-register';
import VictimsOfDomesticViolence from './pages/security-defense/victims-of-domestic-violence';
import AccidentRecords from './pages/security-defense/accident-records';

import AdminPiscinas from './pages/administrator/sanitary-surveillance/pool-cleaning'; // Vigilância Sanitária //
import AdminTerreno from './pages/administrator/sanitary-surveillance/land-cleaning';
import AdminAmbienteIrregular from './pages/administrator/sanitary-surveillance/report-place';
import Piscinas from './pages/sanitary-surveillance/pool-cleaning';
import Terreno from './pages/sanitary-surveillance/land-cleaning';
import Restaurante from './pages/sanitary-surveillance/report-place';

import AdminEscorpiao from './pages/administrator/pest-control/scorpions-habitat'; // Controle de Pragas //
import AdminPragas from './pages/administrator/pest-control/insects-rodents-snails';
import AdminLeishmaniose from './pages/administrator/pest-control/leishmaniose';
import AdminDengue from './pages/administrator/pest-control/dengue-radar';
import Escorpiao from './pages/pest-control/scorpions-habitat';
import Pragas from './pages/pest-control/insects-rodents-snails';
import Leishmaniose from './pages/pest-control/leishmaniose';
import Dengue from './pages/pest-control/dengue-radar';
import DengueMap from './pages/pest-control/dengue-radar/map';

import Monitoring from './pages/remote-sensing/monitoring'; //sensoriamento remoto participativo
import GuardianMonitoring from './pages/remote-sensing/guardian-monitoring';

import LocalTradeOffers from './pages/commercial-association/local-trade-offers'; //associacao comercial
import AdminSynanthropicAnimals from './pages/administrator/domestic-animals/synanthropic-animals';

import PanicButton from './pages/panic-button';
import AdminPanicButton from './pages/administrator/panic-button';
import Notifications from './pages/notifications';
import UserHistoric from './pages/historic';
import AdminLocalTradeOffers from './pages/administrator/commercial-association/local-trade-offers';
import AdminGuardian from './pages/administrator/remote-sensing/guardian-monitoring';
import TrafficMonitoring from './pages/administrator/remote-sensing/traffic-monitoring';

import { api } from './services/api';
import { Context } from './context/Auth/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Profile from './pages/profile';

const AppRoutes = () => {
	const { user } = useContext(Context);
	const [formValues, setFormValues] = useState({});
	const [favoritesData, setFavoritesData] = useState([]);

	const getFavorites = async () => {
		if (user.userId !== undefined) {
			try {
				const { data } = await api.get('/favorites');
				setFavoritesData(data);
			} catch (e) {
				console.log(e);
			}
		}
	};
	useEffect(() => {
		getFavorites();
	}, []);

	const handleAddFavorite = (favorite) => {
		setFavoritesData([...favoritesData, favorite]);

		//adicionar no banco de dados os favoritos
		if (user.userId !== undefined) {
			try {
				api
					.post('/favorites', {
						data: {
							userId: user.userId,
							id: favorite.id,
							name: favorite.name,
							img: favorite.img,
							link: favorite.link,
						},
					})
					.then(() => {
						getFavorites();
						toast.success('Favorito armazenado com sucesso', {
							position: toast.POSITION.TOP_RIGHT,
						});
					});
			} catch (err) {
				console.log(err);
			}

			//console.log("USERID: " + user.userId);
			//console.log("Citiid: " + user.cityId);
			//console.log("Email: " + user.email);
			//console.log("Admin: " + user.isAdmin);
			//console.log("Name: " + user.name);
			//console.log("Button: " + user.panicButton);
		} else {
			toast.warning(
				'É necessário estar logado para armazenar o favorito de forma permanente!',
				{
					position: toast.POSITION.TOP_RIGHT,
				}
			);
			console.log('teste');
		}
	};
	const handleSubFavorite = (Delfavorite) => {
		setFavoritesData(
			favoritesData.filter((favorite) => favorite.id !== Delfavorite.id)
		);
		try {
			api
				.delete('/favorites', {
					params: {
						_id: Delfavorite._id,
					},
				})
				.then(() => {
					getFavorites();
				});
		} catch (e) {
			console.log(e);
		}
	};

	const [locationDataLS, setLocationDataLS] = useState();
	useEffect(() => {
		if (JSON.parse(localStorage.getItem('locationLocalStorage')) !== null) {
			const data = JSON.parse(localStorage.getItem('locationLocalStorage'));

			setLocationDataLS(
				JSON.parse(localStorage.getItem('locationLocalStorage'))
			);
			console.log(data);

			if (data.city !== undefined && data.state !== undefined) {
				setFormValues({
					...formValues,
					state: data.state,
					city: data.city,
				});
			}
		}
	}, []);

	return (
		<Router>
			<LocalContext.Provider value={[formValues, setFormValues]}>
				<ToastContainer autoClose={5000} hideProgressBar={true} />
				<Routes>
					<Route
						exact
						path='/'
						element={
							formValues.state === undefined ||
							formValues.city === undefined ? (
								<Navigate to='/location' />
							) : (
								<Home data={favoritesData} />
							)
						}
					/>
					<Route element={<AdminRoutes />}>
						<Route exact path='/admin' element={<Dashboard />} />
						<Route exact path='/microsservicos' element={<Microsservices />} />
						<Route exact path='/admin_historico' element={<AdminHistoric />} />
						<Route
							exact
							path='/admin/associacao_comercial'
							element={<AssociacaoComercialOpcoes />}
						/>
						<Route
							exact
							path='/admin/comunicacao'
							element={<ComunicacaoOpcoes />}
						/>
						<Route
							exact
							path='/admin/animais_domesticos'
							element={<AnimaisDomesticosOpcoes />}
						/>
						<Route
							exact
							path='/admin/meio_ambiente'
							element={<MeioAmbienteOpcoes />}
						/>
						<Route
							exact
							path='/admin/fauna_flora'
							element={<FaunaFloraOpcoes />}
						/>
						<Route
							exact
							path='/admin/familias_carentes'
							element={<FamiliasCarentesOpcoes />}
						/>
						<Route
							exact
							path='/admin/controle_pragas'
							element={<ControlePragasOpcoes />}
						/>
						<Route
							exact
							path='/admin/administracao_publica'
							element={<AdministracaoPublicaOpcoes />}
						/>
						<Route
							exact
							path='/admin/sensoriamento_remoto'
							element={<SensoriamentoRemotoOpcoes />}
						/>
						<Route
							exact
							path='/admin/remocao_detritos'
							element={<RemocaoDetritosOpcoes />}
						/>
						<Route
							exact
							path='/admin/conservacao_rural'
							element={<ConservacaoRuralOpcoesOpcoes />}
						/>
						<Route
							exact
							path='/admin/vigilancia_sanitaria'
							element={<VigilanciaSanitariaOpcoes />}
						/>
						<Route
							exact
							path='/admin/seguranca_defesa_civil'
							element={<SegurancaDefesaCivilOpcoes />}
						/>
						<Route
							exact
							path='/admin/assistencia_social'
							element={<AssistenciaSocialOpcoes />}
						/>
						<Route
							exact
							path='/admin/servicos_sociais'
							element={<ServicosSociaisOpcoes />}
						/>
						<Route
							exact
							path='/admin/conservacao_urbana'
							element={<ConservacaoUrbanaOpcoes />}
						/>
						<Route
							exact
							path='/admin/animais_abandonados'
							element={<AdminAnimaisAbandonados />}
						/>
						<Route
							exact
							path='/admin/animais_perdidos'
							element={<AdminAnimaisPerdidos />}
						/>
						<Route
							exact
							path='/admin/animais_mortos'
							element={<AdminAnimaisMortos />}
						/>
						<Route
							exact
							path='/admin/residuos_solidos'
							element={<AdminResiduosSolidos />}
						/>
						<Route
							exact
							path='/admin/adocao_animais'
							element={<AdminAdocaoAnimais />}
						/>
						<Route
							exact
							path='/admin/adocao_areas_publicas'
							element={<AdminAdocaoAreas />}
						/>
						<Route
							exact
							path='/admin/monitoramento'
							element={<AdminMonitoramentoTempo />}
						/>
						<Route
							exact
							path='/admin/animais_silvestres'
							element={<AdminAnimaisSilvestres />}
						/>
						<Route
							exact
							path='/admin/maus_tratos'
							element={<AdminMausTratosAnimais />}
						/>
						<Route
							exact
							path='/admin/conheca_os_gestores'
							element={<AdminGestores />}
						/>
						<Route exact path='/admin/noticias' element={<AdminNoticias />} />
						<Route
							exact
							path='/admin/telefones_uteis'
							element={<AdminTelefones />}
						/>
						<Route
							exact
							path='/admin/locais_uteis'
							element={<AdminLocaisUteis />}
						/>
						<Route exact path='/admin/tumulos' element={<AdminTumulos />} />
						<Route
							exact
							path='/admin/programacao_cultural'
							element={<AdminProgramacaoCultural />}
						/>
						<Route exact path='/admin/parques' element={<AdminParques />} />
						<Route
							exact
							path='/admin/pontes_em_estradas_rurais'
							element={<AdminPontes />}
						/>
						<Route exact path='/admin/pracas' element={<AdminPracas />} />
						<Route
							exact
							path='/admin/iluminacao_publica'
							element={<AdminIluminacao />}
						/>
						<Route
							exact
							path='/admin/fiscalizacao_de_instalacoes'
							element={<AdminInstalacoes />}
						/>
						<Route
							exact
							path='/admin/monumentos_e_chafarizes'
							element={<AdminMonumentos />}
						/>
						<Route
							exact
							path='/admin/pavimentacao'
							element={<AdminPavimentacao />}
						/>
						<Route exact path='/admin/vias_publicas' element={<AdminVias />} />
						<Route exact path='/admin/diaristas' element={<AdminDiaristas />} />
						<Route
							exact
							path='/admin/feiras_livres'
							element={<AdminFeiras />}
						/>
						<Route
							exact
							path='/admin/limpeza_de_piscinas'
							element={<AdminPiscinas />}
						/>
						<Route
							exact
							path='/admin/limpeza_de_terreno'
							element={<AdminTerreno />}
						/>
						<Route
							exact
							path='/admin/restaurantes'
							element={<AdminAmbienteIrregular />}
						/>
						<Route
							exact
							path='/admin/foco_de_escorpiao'
							element={<AdminEscorpiao />}
						/>
						<Route
							exact
							path='/admin/insetos_roedores_caramujos'
							element={<AdminPragas />}
						/>
						<Route
							exact
							path='/admin/leishmaniose'
							element={<AdminLeishmaniose />}
						/>
						<Route
							exact
							path='/admin/radar_da_dengue'
							element={<AdminDengue />}
						/>
						<Route
							exact
							path='/admin/registro_roubos'
							element={<AdminTheftRegister />}
						/>
						<Route
							exact
							path='/admin/registro-acidentes'
							element={<AdminAccidentRecords />}
						/>
						<Route
							exact
							path='/admin/violencia-domestica'
							element={<AdminVictimsOfDomesticViolence />}
						/>
						<Route
							exact
							path='/admin/moradores_rua'
							element={<AdminHomelessPeople />}
						/>
						<Route
							exact
							path='/admin/familias-carentes-list'
							element={<AdminNeedyFamilies />}
						/>
						<Route
							exact
							path='/admin/descarte_solidario'
							element={<AdminDescarteSolidario />}
						/>
						<Route
							exact
							path='/admin/arvores'
							element={<AdminInformationAboutTrees />}
						/>
						<Route
							exact
							path='/admin/coleta-de-lixo'
							element={<AdminRefuseCollection />}
						/>
						<Route
							exact
							path='/admin/consultar-propostas-de-leis'
							element={<AdminProposedLegislation />}
						/>
						<Route
							exact
							path='/admin/central-anticorrupcao'
							element={<AdminAntiCorruptionCenter />}
						/>
						<Route
							exact
							path='/admin/animais-sinantropicos'
							element={<AdminSynanthropicAnimals />}
						/>
						<Route
							exact
							path='/admin/comercio-local'
							element={<AdminLocalTradeOffers />}
						/>
						<Route
							exact
							path='/admin/botao_panico'
							element={<AdminPanicButton />}
						/>
						<Route
							exact
							path='/admin/monitoramento-guardinha'
							element={<AdminGuardian />}
						/>
						<Route
							exact
							path='/admin/monitoramento-pessoas-veiculos'
							element={<TrafficMonitoring />}
						/>
					</Route>

					{/** FIM DAS ROTAS DO ADMIN, COMECO DAS ROTAS DOS USUÁRIOS */}

					<Route exact path='/login' element={<Login />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/localizacao' element={<BaseMap />} />
					<Route exact path='/notifications' element={<Notifications />} />
					<Route exact path='/historico' element={<UserHistoric />} />
					<Route
						exact
						path='/conheca_os_gestores'
						element={
							<Gestores
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/telefones_uteis'
						element={
							<Telefones
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/locais_uteis'
						element={
							<LocaisUteis
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/tumulos'
						element={
							<Tumulos
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/programacao_cultural'
						element={
							<ProgramacaoCultural
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/parques'
						element={
							<Parques
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/pontes_em_estradas_rurais'
						element={
							<Pontes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/pracas'
						element={
							<Pracas
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/fiscalizacao_de_instalacoes'
						element={
							<Instalacoes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/iluminacao_publica'
						element={
							<Iluminacao
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/monumentos_e_chafarizes'
						element={
							<Monumentos
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/pavimentacao'
						element={
							<Pavimentacao
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/vias_publicas'
						element={
							<Vias
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/foco_de_escorpiao'
						element={
							<Escorpiao
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/insetos_roedores_caramujos'
						element={
							<Pragas
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/leishmaniose'
						element={
							<Leishmaniose
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/radar_da_dengue'
						element={
							<Dengue
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/radar_da_dengue/mapa'
						element={
							<DengueMap
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/animais_mortos'
						element={
							<AnimaisMortos
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/residuos_solidos'
						element={
							<ResiduosSolidos
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/animais_perdidos_opcoes'
						element={
							<AnimaisPerdidosOpcoes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/animais_perdidos_novo'
						element={
							<AnimaisPerdidosNovo
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/adocao_animais_lista'
						element={
							<AdocaoAnimais
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/adocao_animais_doacao'
						element={
							<NovasDoacoesAnimais
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>

					<Route
						exact
						path='/adocao_animais_opcoes'
						element={
							<AdocaoAnimaisOpcoes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/animais_perdidos_lista'
						element={
							<AnimaisPerdidosLista
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/animais_abandonados'
						element={
							<AnimaisAbandonados
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					{/**<Route
						exact
						path="/adocao_areas_mapa"
						element={
							<PublicAreasMap
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/> */}
					<Route
						exact
						path='/adocao_areas_opcoes'
						element={
							<AdocaoAreasOpcoes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>

					<Route
						exact
						path='/adocao_areas_disponiveis'
						element={
							<AdocaoAreasDisponiveis
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/adocao_areas_adotadas'
						element={
							<AdocaoAreasAdotadas
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/adocao_areas_regras'
						element={
							<AdocaoAreasRegras
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/monitoramento'
						element={
							<MonitoramentoTempo
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					{/**<Route
						exact
						path="/monitoramento/mapa"
						element={
							<PollutionMap
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>*/}
					<Route
						exact
						path='/feiras_livres_mapa'
						element={
							<FairMap
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/feiras_livres'
						element={
							<Feiras
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/diaristas_opcoes'
						element={
							<DiaristasOpcoes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/diaristas_novo'
						element={
							<DiaristasNovo
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/diaristas_lista'
						element={
							<DiaristasLista
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/limpeza_de_piscinas'
						element={
							<Piscinas
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/limpeza_de_terreno'
						element={
							<Terreno
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/restaurantes'
						element={
							<Restaurante
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/animais-sinantropicos'
						element={
							<AnimaisSinantropicos
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>

					<Route
						exact
						path='/animais_silvestres'
						element={
							<AnimaisSilvestres
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/maus_tratos'
						element={
							<MausTratosAnimais
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/registro_roubos'
						element={
							<TheftRegister
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/moradores_rua'
						element={
							<HomelessPeople
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/familia_carente_opcoes'
						element={
							<NeedyFamiliesOption
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/familias_carentes_registro'
						element={
							<NeedyFamiliesRegister
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/familias_carentes_lista'
						element={
							<NeedyFamiliesList
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/descarte_solidario'
						element={
							<DescarteSolidario
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route exact path='/location' element={<UserLocation />} />
					<Route exact path='/sistema' element={<Sistema />} />
					<Route exact path='/password-reset' element={<PasswordReset />} />
					<Route
						exact
						path='/noticias'
						element={
							<Noticias
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/sugestoes'
						element={
							<Sugestoes
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/consultar-propostas-de-leis'
						element={
							<ProposedLegislation
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/central-anticorrupcao'
						element={
							<AntiCorruptionCenter
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/coleta-de-lixo'
						element={
							<RefuseCollection
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/arvores'
						element={
							<InformationAboutTrees
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>

					<Route
						exact
						path='/violencia-domestica'
						element={
							<VictimsOfDomesticViolence
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/registro-acidentes'
						element={
							<AccidentRecords
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/monitoramento-pessoas-veiculos'
						element={
							<Monitoring
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/monitoramento-guardinha'
						element={
							<GuardianMonitoring
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/comercio-local'
						element={
							<LocalTradeOffers
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
					<Route
						exact
						path='/botao_panico'
						element={
							<PanicButton
								data={favoritesData}
								handleAddFavorite={handleAddFavorite}
								handleSubFavorite={handleSubFavorite}
							/>
						}
					/>
				</Routes>
			</LocalContext.Provider>
		</Router>
	);
};

export default AppRoutes;
