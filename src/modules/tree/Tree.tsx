import { useState } from 'react';
import classNames from 'classnames';
import { IoIosSave } from 'react-icons/io';
import { TreeNode } from './treeNode/TreeNode';
import { alert } from '../../shared/components/popupAlert/PopupAlert';
import { TreeNodeType } from '../../shared/types';
import { Loader } from '../../shared/components/loader/Loader';
import styles from './Tree.module.scss';
import { useTree } from '../../shared/hooks/useTree';

export const Tree = () => {
  const { treeData, error, isLoading, isPlaceholderData } = useTree();

  const [selectedNode, setSelectedNode] = useState<TreeNodeType | null>(null);

  const alertFetchError = (message: string) => {
    alert.error(
      {
        title: 'Не удалось получить данные данные',
        text: message,
      },
      {
        icon: <IoIosSave color="red" size={24} />,
      }
    );
  };
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    alertFetchError(error.message || 'An error occurred');
  }

  return (
    <div className={classNames({ [styles.semitransparent]: isPlaceholderData })}>
      {treeData && <TreeNode node={treeData} setSelectedNode={setSelectedNode} selectedNode={selectedNode} />}
    </div>
  );
};
