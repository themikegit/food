import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./Context";
import { withRouter } from "react-router";
import styled from "styled-components";

const MoreRec = ({ currentData }) => {
	const { wpRec } = useContext(MyContext);
	const { id, kat } = currentData;

	const moreArr = wpRec.allRec.filter(
		(item) => item.acf.kategorija === kat && item.id !== id
	);

	return (
		<MoreWrap>
			<h3>Jos iz {kat} </h3>{" "}
			<MoreItems>
				{moreArr.map((item) => (
					<div key={item.id}>
						<Item>
							<Link to={`/recipe/${item.id}`}>
								{" "}
								<p>{item.title.rendered}</p>{" "}
							</Link>
						</Item>
					</div>
				))}
			</MoreItems>{" "}
		</MoreWrap>
	);
};

export default withRouter(MoreRec);

const MoreWrap = styled.div`
	padding: 35px 0;
`;

const MoreItems = styled.div`
	display: flex;
`;
const Item = styled.div`
	padding: 7px;
	p {
		padding: 8px;
		color: #fff;
		background-color: #000;
		&:hover {
			background-color: #f2f2f2;
			color: #000;
		}
	}
`;
