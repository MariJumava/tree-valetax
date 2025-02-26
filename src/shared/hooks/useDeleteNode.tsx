import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { BiSolidTrash } from 'react-icons/bi';
import { treeNodeDelete } from '../api/rest-tree';
import { alert } from '../components/popupAlert/PopupAlert';
import { ErrorResponse } from '../types';

export const useDeleteNode = (nodeId?: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: treeNodeDelete,
    onSuccess: () => {
      alertDeleteNodeSuccess();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        alertDeleteNodeError(axiosError.response?.data.data.message || 'An error occurred');
      }
    },
    onSettled: async () => {
      queryClient.invalidateQueries({
        queryKey: ['tree'],
      });
    },
  });

  const handleDeleteNode = () => {
    if (nodeId) {
      mutation.mutate({ nodeId });
    }
  };
  return {
    handleDeleteNode,
    isDeleteNodePending: mutation.isPending,
  };
};

const alertDeleteNodeSuccess = () => {
  alert.success(
    {
      title: 'Data deleted successfully',
    },
    { icon: <BiSolidTrash color="green" size={24} /> }
  );
};

const alertDeleteNodeError = (message: string) => {
  alert.error(
    {
      title: 'Failed to delete data',
      text: message,
    },
    { icon: <BiSolidTrash color="red" size={24} /> }
  );
};
