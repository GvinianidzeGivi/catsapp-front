import React from 'react';
import './sidebar.styles.css';

import { Category } from '../../domain/models';

type SidebarProps = {
  categories: Category[];
  onSelectCategory: (id: number) => void;
};

const SidebarComponent: React.FC<SidebarProps> = (props: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul>
        {props.categories.map((category) => {
          return (
            <li key={category.id}>
              <button onClick={() => props.onSelectCategory(category.id)}>
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarComponent;
