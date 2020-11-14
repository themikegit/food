import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Filter({ fun }) {
	return (
		//fix the problem with event target
		<FilterSection>
			<ul>
				<li>
					<span
						onClick={(e) => fun(e.target.ariaLabel)}
						role="img"
						aria-label="Glavno jelo"
					>
						🍗
					</span>
					<h3>Glavno jelo</h3>{" "}
				</li>

				<li>
					<span
						onClick={(e) => fun(e.target.ariaLabel)}
						role="img"
						aria-label="Užina"
					>
						🥪
					</span>
					<h3>Uzina</h3>{" "}
				</li>
				<li>
					<span
						onClick={(e) => fun(e.target.ariaLabel)}
						role="img"
						aria-label="Dezert"
					>
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
        span {
          padding: 20px 30px 40px;
          z-index:999;
        }
      &:hover {
          background-color: #000;
          color: #fff;
      }
      &:active {
        background-color: #000;
        color: #fff;
    }

  }
  
			span {
				font-size: 30px;
      }
      
		}
	}
`;
