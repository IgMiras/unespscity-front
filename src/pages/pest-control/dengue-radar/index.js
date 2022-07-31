import React, { useState } from "react";
import PagesPieChart from "../../../charts/types/donut";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import DengueMap from "./map";
import Footer from "../../../components/footer";

import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { StyledHr } from "../../../components/styled-components/StyledHr";

const Dengue = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 93;
	const totalResolvidos = 22;
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};

	const [locations, setLocations] = useState([
		{
			id: 1,
			location: {
				lat: -22.1159641,
				lng: -51.4070265,
			},
		},
		{
			id: 2,
			location: {
				lat: -22.1214422,
				lng: -51.4075171,
			},
		},
		{
			id: 3,
			location: {
				lat: -22.1131517,
				lng: -51.4119613,
			},
		},
		{
			id: 4,
			location: {
				lat: -22.1052299,
				lng: -51.3998977,
			},
		},
		{
			id: 5,
			location: {
				lat: -22.0961994,
				lng: -51.4154257,
			},
		},
		{
			id: 6,
			location: {
				lat: -22.1234142,
				lng: -51.4268159,
			},
		},
		{
			id: 7,
			location: {
				lat: -22.1170895,
				lng: -51.4030536,
			},
		},
		{
			id: 8,
			location: {
				lat: -22.0978330,
				lng: -51.4065919,
			},
		},
		{
			id: 9,
			location: {
				lat: -22.1187192,
				lng: -51.4138216,
			},
		},
		{
			id: 10,
			location: {
				lat: -22.1234442,
				lng: -51.4036667,
			},
		},
	]);

	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<div style = {{
					height: "15vh", 
					width: "8vh", 
					position: "fixed", 
					top: "11vh", 
					right: "12vh", 
					zIndex: "1",
				}}> 
					<a href = "https://www.google.com.br/search?q=aedes+aegypti&hl=pt-BR&tbm=isch&source=hp&biw=1496&bih=723&ei=S7LaYqCJGIX51sQP8vySUA&iflsig=AJiK0e8AAAAAYtrAWyLEwFuLxa-ywYn8_F6v3YYf9McJ&oq=aedes+&gs_lcp=CgNpbWcQARgAMggIABCABBCxAzILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABFAAWIMtYJNjaABwAHgBgAGsE4gBwTySAQswLjEuMC4xLjktM5gBAKABAaoBC2d3cy13aXotaW1n&sclient=img">
						<MiniCard
							source="/assets/img/Radar_da_Dengue.png"
							titulo="Aedes aegypti"
						/>
					</a>	
				</div>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
						linkItems={[
							{
								id: 1,
								name: "Foco de Escorpião",
								link: "/foco_de_escorpiao",
							},
							{
								id: 2,
								name: "Insetos Roedores e Caramujos",
								link: "/insetos_roedores_caramujos",
							},
							{
								id: 3,
								name: "Leishmaniose",
								link: "/leishmaniose",
							},
							{
								id: 4,
								name: "Radar da Dengue",
								link: "/radar_da_dengue",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Radar da Dengue
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar a localização de
							focos do mosquito transmissor da Dengue, o
							pernilongo-rajado (Aedes aegypti).
						</DescriptionText>
					</div>
					{isFavorite ? (
						<span>
							<AiFillStar
								style={{
									cursor: "pointer",
									margin: ".8rem",
									stroke: "black",
									strokeWidth: "5",
								}}
								color={"yellow"}
								size={25}
								onClick={() => handleFavorite()}
							/>
						</span>
					) : (
						<AiOutlineStar
							style={{
								cursor: "pointer",
								margin: ".8rem",
								stroke: "black",
								strokeWidth: "5",
							}}
							size={25}
							onClick={() => handleFavorite()}
						/>
					)}
					<StyledHr />
				</TopContentContainer>
				<MidContentContainer>
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes o local onde foi encontrado o foco de Dengue." />
				</MidContentContainer>
				<div style={{ textAlign: "center", marginTop: "11vh", marginBottom: "12vh" }}>
					<Typography variant = "h6"> Abaixo, você também pode conferir os focos de dengue já registrados na sua cidade: </Typography>
				</div>
				<DengueMap
					locations = {locations}
					icon = "/assets/img/dengue-icon.png"
				/>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Eliminações solicitadas e efetuadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Dengue;