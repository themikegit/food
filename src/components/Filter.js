import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Filter({ fun, valstate }) {
	const active = {
		backgroundColor: " #000",
		color: "#fff",
	};

	return (
		//fix the problem with event target
		<FilterSection>
			<ul>
				<li
					onClick={(e) => fun(e.currentTarget.dataset.id)}
					data-id="Glavno jelo"
					style={valstate == "Glavno jelo" ? active : null}
				>
					<span role="img" aria-label="Glavno jelo">
						🍗
					</span>
					<h3>Glavno jelo</h3>{" "}
				</li>

				<li
					onClick={(e) => fun(e.currentTarget.dataset.id)}
					style={valstate == "Užina" ? active : null}
					data-id="Užina"
				>
					<span role="img" aria-label="Užina">
						🥪
					</span>
					<h3>Uzina</h3>{" "}
				</li>
				<li
					onClick={(e) => fun(e.currentTarget.dataset.id)}
					style={valstate == "Dezert" ? active : null}
					data-id="Dezert"
				>
					<span role="img" aria-label="Dezert">
						🍩
					</span>
					<h3>Dezert</h3>{" "}
				</li>
			</ul>
		</FilterSection>
	);
}

const FilterSection = styled.div`
	display: flex;
	justify-content: center;
	ul {
		padding: 0;
		display: flex;
    list-style: none;
		li {
      cursor: pointer;
      text-align: center;
      width: 100px;
      margin: 5px 15px;
      border: 1px solid #ececec;
      border-radius: 7px;
			padding: 8px;
			transition:200ms ease;
        span {
          padding: 20px 30px 40px;
          z-index:999;
        }
      &:hover {
          background-color: #D6D6D6;
					
      }
    
  }
  
			span {
				font-size: 30px;
      }
      
		}
	}
`;
