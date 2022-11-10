import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import github from '../../assets/github.svg';
import linkedln from '../../assets/linkedln.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import dribble from '../../assets/dribble.svg';
import './card.css';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    widthSize: '600px',
    heightSize: '1100px',
  },
} as ComponentMeta<typeof Card>;

const cards = [
  {
    color: 'white',
    width: '490px',
    height: '195px',
    image: image1,
    name: 'Neel Deshmukh',
    position: 'Frontend Dev @Stripe',
  },
  {
    color: 'white',
    width: '490px',
    height: '195px',
    image: image2,
    name: 'Drishti Rattan',
    position: 'Fashion Designer @Clover ',
  },
  {
    color: 'white',
    width: '490px',
    height: '195px',
    image: image3,
    name: 'Aditi Sarkar',
    position: 'UX / UI Designer @Comet',
  },
  {
    color: 'white',
    width: '490px',
    height: '195px',
    image: image4,
    name: 'Yash Dutt',
    position: 'SDE Intern @SkyNet',
  },
];

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div className="paragraph-container">
      <p className="advice-paragraph">People you may know</p>
      <p className="info-paragraph">See more</p>
    </div>
    {cards.map((cardStyle) => (
      <div
        key={cardStyle.color}
        style={{
          backgroundColor: cardStyle.color,
          width: cardStyle.width,
          height: cardStyle.height,
        }}
        className="large-container"
      >
        <div className="main-container">
          <img src={cardStyle.image} />
          <div className="text-container">
            <p className="text-name"> {cardStyle.name} </p>
            <p className="text-position"> {cardStyle.position} </p>
            <Button
              size="large"
              label="Message"
              className="outline"
              disable={false}
            />
          </div>
        </div>
      </div>
    ))}
  </Card>
);

export const Children = Template.bind({});

const smallCard = [
  { color: 'white', width: '436px', height: '495px', image: image1 },
];

const TemplateCard: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    {smallCard.map((cardProps) => (
      <div
        key={cardProps.color}
        className="small"
        style={{ width: cardProps.width, height: cardProps.height }}
      >
        <img src={cardProps.image} className="profile-image" />
        <div className="membership-container"> PRO </div>
        <div className="name-card">
          <p className="name-paragraph"> Neel Deshmukh </p>
          <p className="position-paragraph"> Fullstack Developer @Sky </p>
        </div>
        <div className="icon-container">
          <img src={github} alt="Github" />
          <img src={linkedln} alt="Linkedln" />
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={dribble} alt="Dribble" />
        </div>
        <div className="bottom-container">
          <Button
            size="large"
            label="Message"
            className="outline"
            disable={false}
          />
          <Button
            size="large"
            label="Connect"
            backgroundColor="#4E87F8"
            disable={false}
          />
        </div>
      </div>
    ))}
  </Card>
);

export const Small = TemplateCard.bind({});
Small.args = {
  widthSize: '520px',
  heightSize: '520px',
};
