import React from 'react';
import Styled from "styled-components";

const CardWrap = Styled.div`
  .result_card {
    display: flex;
    flex-direction: column;
    border: 2px solid brown;
    align-items: center;
    color: brown;
    height: 500px;
    width: 500px;
    background-color: #d6b534;
    border-radius: 10px;
    overflow: hidden;
  }
  .result_name {
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .result_id {
    margin: 0;
    font-size: 15px;
  }
  .result_bio {
    width: 300px;
    text-align: center;
    margin: 20px auto;
  }
  .result_link {
    text-decoration: none;
    color: gold;
    background-color: none;
    border: 2px solid gold;
    border-radius: 5px;
    font-size: 18px;
    padding: 2px 5px;
    margin-bottom: 20px;
  }
  .result_link:hover {
    background-color: gold;
    color: brown;
  }
  .result_list {
    display: flex;
    flex-direction: row;
    
  }
  .result_image {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    padding: 5px;
    margin-top: 30px;
    border: 2px solid brown;
  }
`;

const ResultCard = ({data}) => {
    return data && (
        <CardWrap>
        <div className="result_card">
            <img className="result_image" src = {data.avatar_url} alt="" />
            <p className="result_name">{data.name}</p>
            <p className="result_id">ID : {data.login}</p>
            <p className="result_bio">{data.bio}</p>
            <a
            className="result_link"
            href={data.html_url}
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
            <div className="result_list">
                <div>
                <p className="result_followers">followers : {data.followers} </p>
                </div>
                <div>
                    <p className="result_following"> following : {data.following} </p>
                </div>
                <div>
                    <p className="result_repos"> Repos : {data.public_repos} </p>
                </div>
            
            
            
            </div>

        </div>
        </CardWrap>
    );
};

export default ResultCard;